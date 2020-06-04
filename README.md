# Focus Matters

[![直接以Stylus安裝](https://img.shields.io/static/v1?label=Install%20directly%20with&message=Stylus&color=00adad&style=flat-square)](https://raw.githubusercontent.com/Small-Ku/focus-matters/master/focus-matters.user.styl)
[![安裝使用者腳本](https://img.shields.io/static/v1?label=Install&message=User%20Script&color=00adad&style=flat-square)](https://raw.githubusercontent.com/Small-Ku/focus-matters/master/focus-matters.user.js)
[![安裝使用者樣式](https://img.shields.io/static/v1?label=Install&message=User%20CSS&color=00adad&style=flat-square)](#user-script-或-user-css)
[![授權: MIT](https://img.shields.io/static/v1?label=License&message=MIT&color=yellow&style=flat-square)](https://opensource.org/licenses/MIT)

Focus Matters 是志在改善 [Matters](https://matters.news/) 使用體驗的使用者樣式。

## 目錄

- [Focus Matters](#focus-matters)
  - [目錄](#目錄)
  - [功能](#功能)
  - [安裝](#安裝)
    - [桌面端安裝](#桌面端安裝)
    - [移動端安裝](#移動端安裝)
      - [Android 安裝](#android-安裝)
      - [iOS 安裝](#ios-安裝)
    - [User Script 或 User CSS](#user-script-或-user-css)
  - [使用](#使用)
    - [桌面端使用](#桌面端使用)
    - [移動端使用](#移動端使用)
      - [Android 使用](#android-使用)
      - [iOS 使用](#ios-使用)
  - [規劃](#規劃)
  - [參與](#參與)
  - [授權](#授權)

## 功能

- 擴大頁面內容大小
- 隱藏內容頁的導航欄與側邊欄
- 優化頁面元素視覺平衡與統一
- 加入暗色模式 (Dark Mode)

## 安裝

Focus Matters 可於桌面端與移動端設備，以 User Style (推薦)、User Script 或 User CSS 的方式使用。

### 桌面端安裝

1. 於瀏覽器中安裝支持 User Stylus / User CSS 的插件或擴展程序，如:
   - Chrome/Firefox/Edge 使用者: 安裝 [Stylus](https://github.com/openstyles/stylus)。
   - MacOS Safari 使用者: 安裝 [Cascadea](https://cascadea.app/)。
2. 按[此安裝使用者樣式](https://raw.githubusercontent.com/Small-Ku/focus-matters/master/focus-matters.user.styl)。

### 移動端安裝

請注意在移動端上，所有平臺的 Chrome 和 iOS 上的 Firefox 都無法使用 Focus Matters。

#### Android 安裝

1. 使用可以安裝插件或擴展程序的瀏覽器，如：
   - [Kiwi Browser](https://github.com/kiwibrowser/src)
   - [Firefox* (官方)](https://www.mozilla.org/en-US/firefox/mobile/) ([F-droid](https://gitlab.com/rfc2822/fdroid-firefox))
2. 於瀏覽器中安裝支持 User Stylus / User CSS 的插件或擴展程序，如:
   - Chromium (如 Kiwi Browser) 使用者: 安裝 [Stylus](https://github.com/openstyles/stylus)。
   - Firefox 使用者: 安裝 1.4.22 版本的 [Stylus](https://addons.mozilla.org/zh-TW/firefox/addon/styl-us/versions/)。
3. 按[此安裝使用者樣式](https://raw.githubusercontent.com/Small-Ku/focus-matters/master/focus-matters.user.styl)。

注意：

- [Firefox Preview](https://github.com/mozilla-mobile/fenix) 尚未支持 User Style 或 User Script。
- Firefox Android 亦尚未支持暗色模式 (Dark Mode) 跟隨系統改變的功能。

#### iOS 安裝

iOS 安裝可能會過於複雜，使用者亦可在 [Matters 的文章內](https://matters.news/@Small_Ku/%E4%BE%86%E7%B5%A6%E5%85%A8%E5%B9%B3%E8%87%BA-matters-%E4%B8%8A-dark-mode-%E9%82%84%E6%9C%89%E6%BB%BF%E4%B8%80%E9%BB%9E%E7%9A%84-desktop-%E7%89%88%E9%9D%A2-bafyreibwclnznps4tyrtiryu622ygzt6qmtz6mb2ujjkfkhzzbkzhib5se)找到圖文教程。

1. 使用 iOS 內建的「捷徑」應用程式製作捷徑。
2. 從左邊的「App > Safari」加入動作「在網頁上執行 JavaScript」
3. 複製 [User Script](focus-matters.user.js) 的內容取代原本的預設程式碼
4. 根據喜好調整「options」變數中的設定，詳細見代碼中的註釋，或 [iOS 使用](#ios-使用)
5. 點擊上方的「新捷徑」(或捷徑名稱) 旁的按鈕
6. 為捷徑命名並開啟「在共享工作表中顯示」，再將分享表單類型設為只有「Safari 網頁」
7. 建立完成，使用 Safari 瀏覽 Matters 時可以在共享工作表中開啟捷徑，詳細見下方 [iOS 使用](#ios-使用)

### User Script 或 User CSS

1. 安裝支持 User Script 或 User CSS 的插件或擴展程序，如：
   - User Script:
     - [Violentmonkey](https://violentmonkey.github.io/)
     - [Tampermonkey](https://www.tampermonkey.net/)
     - [Greasemonkey](https://www.greasespot.net/)
   - User CSS:
     - [Stylus](https://github.com/openstyles/stylus) (建議使用 styl 文件，如[桌面端安裝](#桌面端安裝)所示)
     - [Cascadea](https://cascadea.app/) (建議使用 styl 文件，如[桌面端安裝](#桌面端安裝)所示)
     - [Stylish](https://userstyles.org)
2. 安裝相應 User Script 或 User CSS
   - [User Script](focus-matters.user.js)
     - 安裝後根據喜好調整「options」變數中的設定，詳細見代碼中的註釋，或 [iOS 使用](#ios-使用)
   - User CSS:
     - [暗色模式](focus-matters.dark.user.css)
     - [暗色模式 (跟隨系統切換)](focus-matters.dark.auto.user.css)
     - [擴大內容區域](focus-matters.layout.user.css)
     - [視覺優化](focus-matters.optimize.user.css)

## 使用

### 桌面端使用

安裝後，如下圖所示點開 Stylus 的圖示，點擊 Focus Matters 的齒輪按鈕進入選項，

![選項演示](https://i.imgur.com/cTjZDQJ.gif)

並按需開關或選擇：

- 擴大內容：
  - 專注內容
  - 仿製原本
  - 關閉
- 暗色模式
- 視覺優化

在專注內容模式下的內容頁，把滑鼠置於左側空白位置喚出導航欄；
而置於右側喚出側邊欄。

如下圖所示：

![內容頁截圖](https://i.imgur.com/6IHWtiV.gif)

### 移動端使用

注意：

- 擴大內容區域的功能目前只在桌面端生效，平板端和手機端均尚未可用。

#### Android 使用

與[桌面端使用](#桌面端使用)的方法相同，而圖示會藏在角落的選單裡面。

#### iOS 使用

建立捷徑後，使用 Safari 瀏覽 Matters 時可以在共享工作表中開啟捷徑，Focus Matters 隨即生效。

這個捷徑會下載 Focus Matters 的 4 個 User CSS 檔案，並隨後根據使用者的選項和當前網址自動開關樣式。推薦使用者在同一標籤頁裡面瀏覽 Matters，不要刷新或關閉這個標籤頁。因為開啟新的標籤頁需要再次開啟捷徑，而刷新會使樣式失效，兩者都需要再次下載檔案，會比較耗費數據流量。

使用者如需更改選項，請回到「捷徑」應用程式中更改「options」變數，再次開啟捷徑。在 Focus Matters 已生效的頁面中再次開啟捷徑，腳本會自動避免再次下載檔案，只會更改選項，因此請放心使用。

    var options = {
    /*  擴大內容
            選項: "focusMatters": 專注內容, "mockOriginal": 仿製原版, "off": 關閉 */
        "layout": "off",
    /*  暗色模式
            選項: "on": 開啓, "auto": 跟隨系統, "off": 關閉 */
        "darkMode": "on",
    /*  視覺優化
            選項: "on": 開啓, "off": 關閉 */
        "optimize": "on"
    };

如註釋所示，目前「options」變數中包含三個選項，各自有不同可用的值，包括：

- "layout"，設定是否擴大內容區域及其模式，其可用值為：
  - "focusMatters": 專注內容模式, "mockOriginal": 仿製原版模式, "off": 關閉
- "darkMode"，設定是否開啟暗色模式，其可用值為：
  - "on": 開啓, "auto": 跟隨系統, "off": 關閉
- "optimize"，設定是否開啟視覺優化，其可用值為：
  - "on": 開啓, "off": 關閉

## 規劃

- 在平板下擴大內容
- 嘗試在手機下擴大內容

## 參與

歡迎在 [Issues](https://github.com/Samll_Ku/focus-matters/issues) 提出問題和建議，
也歡迎提出 Pull Requests。

本項目使用[語義化版本](https://semver.org/)。

## 授權

[MIT](https://opensource.org/licenses/MIT)
