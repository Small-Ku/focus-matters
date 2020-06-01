// ==UserScript==
// @name          Focus Matters
// @namespace     https://github.com/Small-Ku/focus-matters
// @description   A simple user style for Matters. This is a javascript loader for its pure CSS version.
// @include       https://matters.news/*
// @version       0.4.0-dev+016
// ==/UserScript==

var options = {
/*	擴大內容
        選項: "focusMatters": 專注內容, "mockOriginal": 仿製原版, "off": 關閉 */
    "layout": "off",
/*	暗色模式
        選項: "on": 開啓, "auto": 跟隨系統, "off": 關閉 */
    "darkMode": "on",
/*	視覺優化
        選項: "on": 開啓, "off": 關閉 */
    "optimize": "on"
};

/*	如果 styles 這個物件不存在就新建一個空的
    避免重複運行造成記錄覆蓋*/
if (typeof styles === 'undefined') {
    var styles = {"layout": {},"dark": {},"dark.auto": {},"optimize": {}};
    /*	styles 內每個物件最終(亦是初始化時)儲存的結構如下：
    {	"matches": [], // 匹配方式 (依從 @moz-document 的規則)
        "urls": [],    // 匹配參數 (依從 @moz-document 的規則)
        "styles": []}; // 記錄的樣式 */
}

/*	初始化	*/
(async () => {
    for (var key in styles) {
        /*	如 styles 剛初始化 (裡面沒東西)，載入相應的文件*/
        if (Object.keys(styles[key]).length === 0 && styles[key].constructor === Object) {
            styles[key] = await addStyles("https://raw.githubusercontent.com/Small-Ku/focus-matters/dev/focus-matters."+key+".user.css");
        }
    }
    //	依據選項啟用/關閉 <style> 標籤
    updateStyles();
})();

//	如果頁面網址改變
window.addEventListener('locationchange', function(){
    //	依據選項啟用/關閉 <style> 標籤
    updateStyles();
});

/*	新增頁面網址改變的 EventListener
    來源: https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript */

history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
    window.dispatchEvent(new Event('locationchange'));
});

//	EventListener 借用部分結束

//	啟用或關閉 <style> 標籤的函數部分
async function disableStyles(styleEl) {
    styleEl.setAttribute('media', "not all"); // 不允許所以媒體設備載入此標籤的樣式
    styleEl.setAttribute('type', "text"); // 聲稱此標籤內儲存的是文本而非樣式
}
async function enableStyles(styleEl) {
    if(styleEl.hasAttribute('media')) styleEl.removeAttribute('media');
    if(styleEl.hasAttribute('type')) styleEl.removeAttribute('type');
}

//	依據網址匹配或傳入變數開關 <style> 標籤
async function checkStyle(styles, dis = false) {
    var rec;
    for (var i = 0; i < styles["styles"].length; i++) {
        //	如果 dis 傳入為 false，判斷頁面網址是否匹配
        if (!dis){
            switch (styles["matches"][i]) {
                case "domain":
                    rec = (styles["urls"][i] == window.location.hostname);
                    break;
                case "url":
                    rec = (styles["urls"][i] == window.location.hostname);
                    break;
                case "url-prefix":
                    rec = RegExp("^" + styles["urls"][i]).test(window.location.href);
                    break;
                case "regexp":
                    rec = RegExp(styles["urls"][i]).test(window.location.href);
            }
        }
        /*	根據上面的判斷開關 <style> 標籤
            如果 dis 傳入為 true，直接關閉標籤*/
        if (!dis && rec) {enableStyles(styles["styles"][i]);} else {disableStyles(styles["styles"][i]);}
    }
}

//	依據選項啟用/關閉 <style> 標籤
async function updateStyles() {
    //	設置 CSS 變數，用於擴大內容的樣式
    document.documentElement.style.setProperty('--layoutChange', ((options['layout']=="focusMatters")?'1':'0'));
    //	判斷是否擴大內容
    switch (options['layout']) {
        case "focusMatters":
        case "mockOriginal":
            //	依據網址匹配開啟 <style> 標籤
            checkStyle(styles["layout"]);
            break;
        case "off":
            //	關閉所有擴大內容的 <style> 標籤
            checkStyle(styles["layout"], true);
    }
    switch (options['darkMode']) {
        case "on":
            //	依據網址匹配開啟 <style> 標籤
            checkStyle(styles["dark"]);
            //	關閉自動暗色模式的 <style> 標籤
            checkStyle(styles["dark.auto"], true);
            break;
        case "auto":
            //	依據網址匹配開啟 <style> 標籤
            checkStyle(styles["dark"], true);
            //	關閉強制暗色模式的 <style> 標籤
            checkStyle(styles["dark.auto"]);
            break;
        case "off":
            //	關閉所有暗色模式的 <style> 標籤
            checkStyle(styles["dark"], true);
            checkStyle(styles["dark.auto"], true);
    }
    switch (options['optimize']) {
        case "on":
            //	依據網址匹配開啟 <style> 標籤
            checkStyle(styles["optimize"]);
            break;
        case "off":
            //	關閉所有視覺優化的 <style> 標籤
            checkStyle(styles["optimize"], true);
    }
}

//	載入網址的樣式文件
async function addStyles(url) {
    var response = await fetch(url), text = await response.text(), lines = text.split('\n'); // 下載文件，分行處理
    var storage = {
        "matches": [],
        "urls": [],
        "styles": []
    }; // 建立儲存範本
    var moz, temp = ""; // 臨時變數
    for(var line = 0; line < lines.length; line++){ // 以行為單位的解析器 (?)
        if(moz = lines[line].match(/@-moz-document (\w+)\("(.+)"\)/)) { // 遇到有網址匹配的行數時
            storage["matches"].push(moz[1]); // 記錄匹配方式
            storage["urls"].push(moz[2]); // 記錄匹配參數
        } else if (lines[line].match(/^}$/)) { // 遇到行的內容只有 } 時
            document.body.insertAdjacentHTML('beforeend', '<style>' + temp + '</style>'); // 插入 <style> 標籤
            storage["styles"].push(document.body.lastElementChild); // 記錄該標籤以便開關
            disableStyles(document.body.lastElementChild); // 先關閉該標籤，以免頁面閃爍
            temp = ""; // 刪除臨時內容
        } else { // 其他情況
            temp = temp.concat(lines[line]); // 以臨時變數記錄樣式，等待插入
        }
    }
    return storage; // 記錄有關資料以便開關
}