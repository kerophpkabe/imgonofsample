'use strict'

// フロア用の画像を取得する
const tile = ['./tile/cala.png', './tile/up.png', './tile/exit.png', './tile/leftup.png', './tile/left.png', './tile/leftdown.png', './tile/down.png', './tile/rightdown.png', './tile/right.png', './tile/rightup.png'];

//フィールド1行の最大マス数を記入
let min = 46;
//スタートからゴールの理想距離を記入
let wark = 15;

// フィールドの大きさを決める
let yscale = Math.floor(Math.random() * (min - 16) + 16);
let xscale = Math.floor(Math.random() * (min - 16) + 16);
console.log(yscale + '*' + xscale);
let field = [];

// フィールドにタイルを張る
var table = document.createElement('table')
for (var x = 0; x < xscale; x++) {
  var tr = document.createElement('tr');
  for (var y = 0; y < yscale; y++) {
    var td = document.createElement('td');
    let classname = (`y${y}x${x}`);
    td.className = classname
    field.push(classname);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.getElementById('cave').appendChild(table);

console.log(field.length);

// スタートとゴールを決める
let max = field.length - min;
let startNo = Math.floor(Math.random() * (max - min) + min);
let goalNo = Math.floor(Math.random() * (max - min) + min);
console.log(startNo + ' + ' + goalNo);
if (startNo === goalNo) {
  goalNo = goalNo + wark;
}
console.log(startNo + ' + ' + goalNo);

// スタートからゴールの数字的移動を見る
let start = field[startNo];
let goal = field[goalNo];
let liney = 0;
let linex = 0;
let upWark = 0;
let downWark = 0;
let rightWark = 0;
let leftWark = 0;
console.log(start + ' + ' + goal)

let cut1 = start.substring(0, start.indexOf('x'));
let starty = cut1.substring(cut1.indexOf('y') + 1);
let startx = start.substring(start.indexOf('x') + 1);
console.log('start ' + starty + ' + ' + startx)

let cut2 = goal.substring(0, goal.indexOf('x'));
let goaly = cut2.substring(cut2.indexOf('y') + 1);
let goalx = goal.substring(goal.indexOf('x') + 1);
console.log('goal  ' + goaly + ' + ' + goalx)

if (Number(starty) > Number(goaly)) {
  liney = starty - goaly
  leftWark = liney
} else {
  liney = goaly - starty;
  rightWark = liney
};
if (Number(startx) > Number(goalx)) {
  linex = startx - goalx
  upWark = linex
} else {
  linex = goalx - startx
  downWark = linex
};

console.log('line ' + liney + ' + ' + linex)

// ついでに最短移動方向を見る(今はコンソールに出力)
console.log('上に ' + upWark + ' 下に ' + downWark + ' 右に ' + rightWark + ' 左に ' + leftWark)

// ゴール地点に出口を入れる
let elmg = document.getElementsByClassName(field[goalNo]);
elmg[0].classList.add("goal");

// キャラクターを入口に配置
// const calaset = document.querySelector(".cala");
// calaset.style.top = ((y + 1) * 32) + "px";
// calaset.style.left = ((x + 1) * 32) + "px";

// img要素を作成
let img_element = document.createElement('img');
img_element.src = './tile/cala.png'

// 指定した要素にimg要素を挿入
let cala = document.getElementsByClassName(field[startNo]);
cala[0].appendChild(img_element);
cala[0].classList.add("cala");
// キャラクター現在地を記録
let calaMapy = starty;
let calaMapx = startx;

//キーが押されたときに呼び出される関数
addEventListener("keydown", keydownfunc);
function keydownfunc(event) {
  cala = document.getElementsByClassName('y' + calaMapy + 'x' + calaMapx);
  cala[0].classList.remove("cala");

	var key_code = event.keyCode;

	if( key_code === 37 ) calaMapx -= 1;		//左ボタン
	if( key_code === 38 ) calaMapy -= 1;		//上ボタン
	if( key_code === 39 ) calaMapx += 1;		//右ボタン
	if( key_code === 40 ) calaMapy += 1;		//下ボタン
  cala = document.getElementsByClassName('y' + calaMapy + 'x' + calaMapx);
  cala[0].classList.add("cala");
}

// 部屋を作成するための補助プログラム
function roomMake1() {
  return Math.floor(Math.random() * 4) + 4
}
// 通路のある方向を作成
function roomMake2() {
  return Math.floor(Math.random() * 2)
}

// スタート地点を部屋にする
let roomy = roomMake1(1)
let roomx = roomMake1(1)
let strN = roomMake2(1)
let strW = roomMake2(1)
let strS = roomMake2(1)
let strE = roomMake2(1)
// 全ての方向に通路がないのはマズい。
if (strN === 0 && strW === 0 && strS === 0) {
  strE = 1
}
console.log('横' + roomy + '縦' + roomx + '北' + strN + '西' + strW + '南' + strS + '東' + strE)