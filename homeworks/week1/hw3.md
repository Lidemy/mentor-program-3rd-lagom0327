## 教你朋友 CLI  

h0w 哥覺得使用 command line 建立檔案比較潮，可以在學弟妹前裝逼，所以想學會 CLI 怎麼使用。為了朋友的尊嚴所以只好教教他了。

### CLI 是甚麼呢?  
CLI 是 Command line interface ，中文為命令列介面。相信 h0w 哥還是不懂甚麼是命令列，簡單來說就是只能用**鍵盤**輸入英文，以控制電腦裡的檔案。而我們平常是使用 [GUI (Graphical User Interface 圖形使用者介面)](https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2)，其大部分動作都是使用滑鼠點螢幕上的圖案就可以控制電腦中的檔案了。

### 內建 cmd.exe 太遜了，換一個  
h0w 哥的電腦內就有內建可使用 CLI 的工具 cmd.exe ，但它的[缺點](https://www.jianshu.com/p/7a706c0a3411)簡直是罄竹難書，長的實在太醜，而且大家都看過這工具一點都不潮，無法幫他吸引學弟妹的目光，所以叫他下載其他工具來使用 CLI 。(其實是我不會用 cmd.exe QAQ)

但是 h0w 哥並竟是 h0w 哥，有兩台不同系統的電腦也是應該的，所以他又跑來問我 Mac 和 Windows 分別推薦甚麼工具下載。雖然我只有一台電腦，但我必須保持我的尊嚴，裝逼回答他，「就我使用那麼多種 CLI 工具的體驗來說，**Mac 裝 iTerm； Windows 裝 Cmder**」

裝好使用 CLI 的工具後，如果想要讓介面更美觀吸引人，可以上網請教 Gooogle 大神如何使用 OH-MY-ZSH。
### 學習四大指令  
下載好工具後，打開 Cmder ，終於可以教 h0w 哥最常用的四大指令了。通常一進畫面會看到一個 λ 符號，那就是每次要打命令的地方。

如果下面有指令不能用，請按右下角綠底白十字按扭右方的黑色倒三角形，挑選一個 Shell 使用，如果系統是 Windows 推薦使用 {bash} 。

至於為甚麼要用不同的 Shell，可以先認識 [Shell 是甚麼](https://ithelp.ithome.com.tw/articles/10207473?sc=iThelpR) 。簡單來說，雖然不同的系統都是用類似的語言建立，譬如大家都會說英語，但如果我們想流利地和外國人溝通，單純只會使用英語是不夠，必須了解當地的生活用語和**縮寫**，才能溝通無礙。就像如果用訊息傳 wtf (輸入) 給只學過教科書上英語的人(系統/核心)，他並不會明白他被罵了(不會產生輸出)。但這個縮寫如果用另一通訊軟體 (Shell) 傳出，此通訊軟體會默默地將 wtf 翻譯成 what the fuck 給對方，此時我就死定了。
      

      
#### 1. pwd (Print Working Directory):  
##### 列印出現在位置
輸入後如下所示
```sh
C:\Users\userName
λ pwd
C:\Users\userName
C:\Users\userName
λ
```
#### 2. ls (List)   
##### 印出現在資料夾底下檔案
```sh
C:\Users\userName
λ ls
AppData/......   
C:\Users\userName
λ
```
如果要印出檔案的詳細資料，用使用 `ls -al` ， `al` 為 all 意思。

#### 3. cd (Chang Directory)  
##### 切換目錄
 
 | 指令 | 說明|
 |:----:|:----:|
 `cd ..`      | 回到上一層
 `cd \`       |根目錄，通常為 C:\
 `cd ~`        |到 HOME 目錄，通常為 /c/Users/jz00z
 `cd <folderName>`|目前資料夾下的資料夾，為相對路徑
`cd c/Users/userName/desktop`|到桌面，為絕對路徑
結合學過的 `ls` 產生的結果會如下
```sh
C:\Users\userName
λ cd Documents\

C:\Users\userName\Documents
λ ls
 desktop.ini  'My Music'@  'My Pictures'@  'My Videos'@

C:\Users\userName\Documents
λ ls -al
total 21
drwxr-xr-x 1 userName 197609   0 五月 20  2018  ./
drwxr-xr-x 1 userName 197609   0 四月 21 00:00  ../
-rw-r--r-- 1 userName 197609 200 五月 20  2018  desktop.ini
lrwxrwxrwx 1 userName 197609  20 八月 26  2017 'My Music' -> /c/Users/userName/Music/
lrwxrwxrwx 1 userName 197609  23 八月 26  2017 'My Pictures' -> /c/Users/userName/Pictures/
lrwxrwxrwx 1 userName 197609  21 八月 26  2017 'My Videos' -> /c/Users/userName/Videos/
```
#### 4. man (Manul)  
##### 操作手冊
打 `man` 加其他指令可以得到該指令的操作手冊，但 Windows 沒有內建這個指令，會得到如下的錯誤訊息。
> 'man' 不是內部或外部命令、可執行的程式或批次檔。
> bash: man: command not found

可以用 `--help` 取代 `man`，像 `man ls` 和 `ls --help` 都可以查看 `ls` 的操作手冊

### 學習其他指令   
聽了我詳細介紹四大指令後，相信以 h0w 哥的聰明才智，只要看下面表格加上使用 `man` 指令看操作手冊，就能了解這些指令的用法，自己創建出想要的資料夾和檔案了。
<table>
<td bgcolor=#EBEBEB " align='center' valign="middle"><b>指令</b></td>
<td bgcolor=#EBEBEB " align='center' valign="middle"><b>範例</b></td>
<td bgcolor=#EBEBEB " align='center' valign="middle"><b>說明</b></td> 
</tr>
<tr>
<td> <font color=#FF6A6A>touch</td> 
<td> touch test</td> 
<td>建立名為 test 的檔案或改其最後修改時間 </td> 
</tr>
<tr>
<td " align='center' valign="middle"><br><font color=#FF6A6A> rm<br> <br></td>
<td>rm test<br>rm -r test <br> rm -r -f test</td>
<td>刪除名為 test 的檔案 <br> 刪除名為 test 的資料夾，r 為資料夾意思<br>強制刪除名為 test 的資料夾，不論裡面有無檔案，f 為強迫意思 </td>
</tr>
<tr>
<td " align='center' valign="middle"><font color=#FF6A6A>mkdir </td>
<td >mkdir folder
<td> 建立名為 folder 的資料夾
</tr>
<tr>
<td " align='center' valign="middle"><font color=#FF6A6A>mv</td>
<td>mv test .. <br> mv test test1
<td>移動 test 到上一層資料夾 <br> test 改名為 test1
</tr>
<tr>
<td " align='center' valign="middle"><font color=#FF6A6A>cp</td>
<td>cp test1 test2
<td>複製 test1 的內容到 test2 裡，沒有 test2 這個檔案就建立一個 </td></table>

### 給 h0w 哥的懶人包  
雖然有懶人包，不過 h0w 哥看到這裡已經來不及了吧~ 顆顆~ 
因為你沒說資料夾要放哪裡，相信你那麼懶惰，這麼重要的資料夾一定是放桌面吧~
- 打開 Cmder
   1. `cd ~/Desktop` : 進入桌面
   1. `mkdir wifi` : 建立名為 `wifi` 的資料夾
   1. `cd wifi` : 進入 `wifi` 資料夾
   1. `touch afu.js` : 建立 `afu.js` 文件 
- 如果你想修改 `afu.js` 文件內容，請繼續往下做
   1. `vim afu.js` : 使用 vim editor 修改 `afu.js`
   1. 按 `i` 或 `Insert` 開啟普通模式
   1. 輸入想修改的內容
   1. 按 `Esc` 後再輸入 `:wq` 存儲離開

- 小訣竅
   - 要輸入檔案名稱時，可以先打前面幾個字再按 `tab` 鍵就會自動補全檔案名稱 

 
