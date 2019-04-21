##交作業流程
###下載作業檔案
1. 到老師的GitHub Classroom [邀請連結](https://classroom.github.com/a/V4hZopA2)
進入後會自動複製一個 repository 名為mentor-program-3rd-**studentsName**，但管理員權限還是在老師身上。
1. 按下右上角綠色的clone or download鍵 出現一連結，複製連結![green buttom](https://raw.githubusercontent.com/lagom0327/Markdownphotos/master/week1/hw1/cloneordownload.png?token=ALZTNIJOB4256BIXCGHXXSS4XLMW6) 

1. 到 CLI 中進入到想存儲作業的資料夾，例如我想放在桌面
輸入 

    ```sh
    cd desktop     
    git clone https://github.com/Lidemy/mentor-program-3rd-studentsName.git`
    ```
     等待其複製完後使用 `cd mentor-program-3rd-lagom0327` 進到資料夾內。
 
1. 輸入 `npm install` ，如果是用 *Linux* 或 *wsl shell* 要打 `sudo npm install`，有可能會要求輸入你的密碼。如果有錯誤訊息，依循指示修改。我的修改過程如下圖
![example npm install](https://raw.githubusercontent.com/lagom0327/Markdownphotos/master/week1/hw1/npminstall.png?token=ALZTNIMEVPUL3RGVBPV7GR24XLL3C)

1. 因為[使用 `npm install`](https://ithelp.ithome.com.tw/articles/10191783) 會修改到 `package.json` ，所以可看到我的 CLI 中 master 後多了個驚嘆號，代表有東西被修改還沒有被 Commit。

------
<h3 id="here">開始寫作業前步驟</h3>

1. 每周要寫作業前都要建立一條新的 Branch 名為 weekx ，x = 第幾周。像第一周要寫作業輸入 `git branch week1` ，建立名為 week1 的 Branch。
1. 建立好新的 Branch 後使用 `git checkout week1` 轉換指標到 week1 才能開始寫作業。
-------
###寫作業中 ~~~~~~~~~~~
-------
###寫完作業後步驟

1. 寫完後會到 CLI 用 `gst` 查看有哪些檔案被修改了。然後用 `git commit –am "message"` 存新版本，如果有新增沒在暫存區的檔案要用 `git add .` 加上 `git commit -m "message"` 存儲新版本。 CLI 會跑一下下等 *Eslint* 檢查提交的程式有無符合規範，有錯誤的話會跳出提示要修改哪些地方，修改完後再輸入一次 `git commit –am "message"` 提交 comit 。
1. 確定作業都沒問題後提使用 `git push origin week1` 交作業到遠端的網路上。
1. 回到網頁 https://github.com/Lidemy/mentor-program-3rd-**studentsName**/tree/master 確定 branch 上傳了，
1. 按 branch 按鈕右方的 *New pull request* 或綠色的 *Compare & pull request* ，或者按上方 *Pull resquests*  後會出現綠色 *New pull request* 按下後，確定 base 為 master 和 compare 為 week1 ，隨便打個標題和評論提交，提交完**複製上方網址**
![new pull request](https://raw.githubusercontent.com/lagom0327/Markdownphotos/master/week1/hw1/newpullrequest.png?token=ALZTNIJKLDDMK7I7HDFQHLK4XLLKU)
1. 到Lidemy的主頁搜尋 homeworks-3rd 或直接進入 <https://github.com/Lidemy/homeworks-3rd>
1. 按下綠色按扭 *New issue* ，標題要按一定格式打 ex:[Week1] ，W 要大寫。內容貼上剛剛**複製的網址**後按 *submit new issue*。
1. 網頁重新整理後確定自己提交的 Issue 沒有被 **lidemy-hw-bot** 關掉，成功的話 **lidemy-hw-bot** 會幫忙加上標籤並 tag 同學看作業。
1. 當老師看完作業後，會同意 *merge pull request* ，刪除同學的 week1 的 Branch，並關掉在 homework-3rd 的 Issue。看到是老師 **aszx87410** 關的 Issue 就代表這周的作業已經大功到成啦!
1. 但如果作業老師有留言要改哪裡，要重新從[開始寫作業前步驟](#here)做一次。
------
###老師確認完作業後(不論是否還要修改)
1. 因為老師已經幫忙把遠端的 Branch 都整合到 master ，所以我們自己要把最新的 master 拉到本地。先用 `git checkout master` 轉換指標位置，再用 `git pull origin master` 得到最新版本。
1. 刪除已被整合的 Brach， `git branch -d week1`
