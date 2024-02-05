'use strict'


let fueruyouso = 0;
let idcount = 0;
let classcount = 0;
let nocount = 0;

function makeImg() {
    // // 増やすものを作成する
    fueruyouso = document.createElement('img');
    // // 増やす要素の中身を作成（htmlに記述される）
    fueruyouso.src = 'img/sample1.png'
    fueruyouso.width = 220;
    fueruyouso.height = 220; //ここではpxの記述は不要
}

// IDに要素を増やす
function gebid() {
    if (idcount === 0) {
        makeImg();
        const iddefuyasu = document.getElementById('target');
        iddefuyasu.appendChild(fueruyouso);
        idcount = 1;
    }
}
// IDの要素を消す
function gebiddel() {
    if (idcount === 1) {
        const iddekesu = document.getElementById('target');
        // iddekesu.removeChild(iddekesu.firstElementChild);
        iddekesu.querySelector("img").remove();
        idcount = 0;
    }
}


// Classに要素を増やす
function gebcl() {
    if (classcount === 0) {
        makeImg();
        const classdefuyasu = document.getElementsByClassName('target');
        classdefuyasu[0].appendChild(fueruyouso);
        classcount = 1;
    }
}
// Classの要素を消す
function gebcldel() {
    if (classcount === 1) {
        const classdekesu = document.getElementsByClassName('target');
        classdekesu[0].querySelector("img").remove();
        classcount = 0;
    }
}

// 何もない空間に要素を増やす
function gebno() {
    if (nocount === 0) {
        const none001 = document.createElement('div')
        none001.className = ('target')
        // none001.class = 'target';  これではクラス名を付与できない
        const none002 = document.getElementsByClassName('td013');
        none002[0].appendChild(none001);
        // // $('div').eq(11).addClass('target');←60行の方がスマートだから消しました
        // const none003 = none002[0].firstElementChild;
        // // none002[0].ElementChild.addClass('taget');
        // console.log(none003);
        // console.log($('div').eq(11))←67/68行の違いは重要
        // none003[0].addClass('target');まぁ結果的にここでNG（６０行目で実現した）
        makeImg();
        const nonedefuyasu = document.getElementsByClassName('target');
        nonedefuyasu[1].appendChild(fueruyouso);
        nocount = 1;
    }
}
// noneの要素を消す
function gebnodel() {
    if (nocount === 1) {
        const nonedekesu = document.getElementsByClassName('target');
        nonedekesu[1].remove();
        nocount = 0;
    }
}

