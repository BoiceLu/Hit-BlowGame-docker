// 取色變數
var c
// 顏色陣列
var arr = ['red', 'orange', 'yellow', 'green', 'blue', 'white'];
// 答案
var ansArray = [];
// 玩家答案
var playerAns = [];
// hit&blow數
var hit = 0;
var blow = 0;
// 檢查燈變數
var rL



// --------------------準備區-------------------

alert("請按下START開始遊戲")
// 產生答案
for (i = 0; i < 4; i++) {
    var ran = Math.floor(Math.random() * arr.length);
    ansArray.push(arr.splice(ran, 1));
}
// 填色區停用&填色方法
var n = document.getElementsByClassName('fill');
for (f = 0; f < n.length; f++) {
    n[f].disabled = true;
    n[f].onclick = function () { this.style.backgroundColor = c };
}
// 檢查鈕停用&函式(未完成)
var d = document.getElementsByClassName('check')
for (g = 0; g < d.length; g++) {
    d[g].disabled = true;
}
var cc = document.getElementsByClassName('pick')



// 答案
console.log(ansArray);
// ---------------------函數區-------------------
// 取色函式
function choiceColor(n) {
    c = document.getElementsByClassName('pick')[n].style.backgroundColor
}
// 按鈕開關函式
// 關
function turnOffbtn(n) {
    let turnOff = document.getElementsByClassName(`round${n}`)
    for (var t = 0; t < turnOff.length; t++) {
        turnOff[t].disabled = true;
        playerAns.push(turnOff[t].style.backgroundColor);
    }
}
// 開
function tunOnbtn(n) {
    let turnOn = document.getElementsByClassName(`round${n + 1}`)
    for (var t = 0; t < turnOn.length; t++) {
        turnOn[t].disabled = false;
    }
}
// Hit 數檢查並移除重複
function hitCheck() {
    let = playerAnshit = [];
    hit = 0;
    for (i = 0; i < 4; i++) {
        if (playerAns[i] == ansArray[i]) {
            playerAnshit.push(playerAns.splice(i, 1, 0));
            hit += 1;
        }
    }

    for (k = 0; k < playerAnshit.length; k++) {
        for (j = 0; j < 4; j++) {
            if (playerAns[j] == playerAnshit[k]) {
                playerAns.splice(j, 1, 0)
            }
        }
    }
}

// 找blow
function blowCheck() {
    blow = 0
    playerAns = playerAns.filter(function (element, index, arr) {
        return arr.indexOf(element) === index;
    })
    for (a = 0; a < 4; a++) {
        for (b = 0; b < 4; b++) {
            if (ansArray[a] == playerAns[b])
                blow += 1;
        }
    }
}
// 檢查燈函式
function light() {
    for (i = 0; i < hit; i++) {
        rL[i].style.backgroundColor = "red"
    }
    for (i = hit; i < hit + blow; i++) {
        rL[i].style.backgroundColor = "yellow"
    }
}
// 顯示答案
function showAns() {
    for (u = 0; u < 4; u++) {
        document.getElementsByTagName("img")[u].style.display = "none"
        document.getElementsByClassName('ansBall')[u].style.backgroundColor = ansArray[u]
    }
}

//檢查按鈕函式 hit4  btn0 btn8 特別判斷
function checkBtn(n) {
    // 清空玩家答案
    playerAns = [];
    turnOffbtn(n)
    hitCheck()
    blowCheck()
    if (n !== 0) {
        rL = document.getElementsByClassName('return')[n - 1].getElementsByClassName('returnLight')
        light()
        if (hit == 4) {
            turnOffbtn(n)
            showAns()
            alert("恭喜你~~~ 正確答案!!")
        }
        else if (n == 8) {
            alert("再試試吧~")
            showAns()
        }
        else {
            tunOnbtn(n)
        }}
        else {
            tunOnbtn(n)
    }

}

// 控制鈕
function control(value) {
    switch (value) {
        case 10:
            for (g = 0; g < 9; g++) {
                turnOffbtn(g)
            }
            showAns()
            break
        case 12:
            location.reload()
            break

    }
}

