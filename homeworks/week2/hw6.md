``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. i = 0, 
1. 檢查 0 < arr.length = 6 => true 進入迴圈
1. arr[0] = 3 沒有小於零，不進入 if 裡
1. i = 0+1 = 1
1. 檢查0 < arr.length = 6 => true 進入迴圈
1. arr[1] = 5 沒有小於零，不進入 if 裡
1. i = 1+1 = 2
1. 檢查 2 < arr.length = 6 => true 進入迴圈
1. arr[2] = 8 沒有小於零，不進入 if 裡
1. i = 2+1 = 3
1. 檢查 3 < arr.length = 6 => true 進入迴圈
1. arr[3] = 13 沒有小於零，不進入 if 裡
1. i = 3+1 = 4
1. 檢查 4 < arr.length = 6 => true 進入迴圈
1. arr[4] = 22 沒有小於零，不進入 if 裡
1. i = 4+1 = 5
1. 檢查 5 < arr.length = 6 => true 進入迴圈
1. arr[5] = 35 沒有小於零，不進入 if 裡
1. i = 5+1 = 6
1. 檢查 6 沒有小於 arr.length = 6 ,不進入迴圈
> 看第二個 for loop
1. i = 2
1. 2 < arr.length = 6 => 進入迴圈
1. arr[2] = 8, ((arr[1] = 5) + (arr[0] = 3) = 8, 前者**沒有**不等於後者 => false，不進入 if
1. i = 2 + 1 = 3
1. 3 < arr.length = 6 => 進入迴圈
1. arr[3] = 13, ((arr[2] = 8) + (arr[1] = 5) = 13, 前者**沒有**不等於後者 => false，不進入 if
1. i = 3 + 1 = 4
1. 4 < arr.length = 6 => 進入迴圈
1. arr[4] = 22, ((arr[2] = 13) + (arr[1] = 8) = 21, 22 != 21 為 true ，進入 if
1. 回傳 invalid, 結束函式 