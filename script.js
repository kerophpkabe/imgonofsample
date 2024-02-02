'use strict'

// // 増やすものを作成する
let fueruyouso = document.createElement('img');
// // 増やす要素の中身を作成（htmlに記述される）
fueruyouso.src = 'img/sample1.png'
fueruyouso.width = 220;
fueruyouso.height = 220; //ここではpxの記述は不要

// IDに要素を増やす
function gebid() {
    const iddefuyasu = document.getElementById('target')
    iddefuyasu.appendChild(fueruyouso);
}
// IDの要素を消す
function gebiddel() {
    const iddekesu = document.getElementById('target')
    // iddekesu.removeChild(iddekesu.firstElementChild);
    iddekesu.querySelector("img").remove();
}


// Classに要素を増やす
function gebcl() {
    const classdefuyasu = document.getElementsByClassName('target')
    classdefuyasu[0].appendChild(fueruyouso);
}
// Classの要素を消す
function gebcldel() {
    const classdekesu = document.getElementsByClassName('target')
//    classdekesu[0].removeChild(classdekesu[0].firstElementChild);
    classdekesu[0].querySelector("img").remove();
}

// 何もない空間に要素を増やす