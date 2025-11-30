'use strict';
// please do not delete the 'use strict' line above


//エンドロールデータ事前読み込み
const contentOfEndroll = [
{key : "	Member 01:	Tomoya	"},
{key : "	Member 02:	Akane	"},
{key : "	Member 03:	Miyuki	"},
{key : "			"},
{key : "		Day1	"},
{key : "	Instructor : 	Reito	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture1 :	DIGプログラミング基礎へようこそ！	"},
{key : "	Lecture2 :	リモートランスルー	"},
{key : "	Lecture3 :	プログラミングの基礎	"},
{key : "	Lecture4 :	How To Code	"},
{key : "	Lecture5 :	変数入門	"},
{key : "			"},
{key : "		Day 2	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Instructor : 	Yusuke K	"},
{key : "	Lecture6 :	変数入門 ウォーミングアップ	"},
{key : "	Lecture7 :	関数入門	"},
{key : "	Lecture8 :	ペアプログラミング	"},
{key : "	Lecture9 :	関数の構成要素	"},
{key : "			"},
{key : "		Day3	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture10 :	関数入門 ウォーミングアップ	"},
{key : "	Lecture11 :	比較入門	"},
{key : "	Lecture12 :	問題に取り組む方法	"},
{key : "	Lecture13 :	HTML基礎編	"},
{key : "	Lecture14 :	ミニマリストの自己紹介Webページを作ってみよう！	"},
{key : "			"},
{key : "		Day4	"},
{key : "	Instructor : 	Maekawa Satoshi	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture15 :	比較入門 ウォーミングアップ	"},
{key : "	Lecture16 :	条件分岐入門	"},
{key : "			"},
{key : "		Day5	"},
{key : "	Instructor : 	Seijirou Kosaki	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Lecture17 :	条件分岐入門 ウォーミングアップ	"},
{key : "	Lecture18 :	テスト駆動開発（Test-driven Development [TDD]）	"},
{key : "	Lecture19 :	コードスタイル	"},
{key : "			"},
{key : "		Day6	"},
{key : "	Instructor : 	Masakazu Terada	"},
{key : "	Instructor : 	Yusuke K	"},
{key : "	Lecture20 :	テスト駆動開発（Test-driven Development [TDD]） Warmup	"},
{key : "	Lecture21 :	続・ 条件分岐	"},
{key : "	Lecture22 :	デバッグ	"},
{key : "	Lecture23 :	関数（Functions）, 比較（Comparisons）& 条件分岐（Conditionals）! レビュー	"},
{key : "			"},
{key : "		Day7	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Instructor : 	Yusuke K	"},
{key : "	Lecture24 :	assessment #1	"},
{key : "	Lecture25 :	アセスメント1	"},
{key : "	Lecture26 :	インポスターシンドローム	"},
{key : "	Lecture27 :	配列入門	"},
{key : "			"},
{key : "		Day8	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture28 :	配列入門 ウォーミングアップ	"},
{key : "	Lecture29 :	for..of ループ	"},
{key : "	Lecture30 :	TDD レビュー	"},
{key : "	Lecture31 :	TDD（テスト駆動開発）の復習	"},
{key : "	Lecture32 :	HTML + CSS	"},
{key : "	Lecture33 :	HTML & CSS レイアウト	"},
{key : "			"},
{key : "		Day9	"},
{key : "	Instructor : 	Reito	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Lecture34 :	for..of ループ ウォーミングアップ	"},
{key : "	Lecture35 :	オブジェクト入門	"},
{key : "	Lecture36 :	スコープ	"},
{key : "			"},
{key : "		Day10	"},
{key : "	Instructor : 	Maekawa Satoshi	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture37 :	オブジェクト入門 ウォーミングアップ	"},
{key : "	Lecture38 :	for...in ループ	"},
{key : "	Lecture39 :	参照渡しと値渡し	"},
{key : "	Lecture40 :	プロジェクト - プレゼンテーション	"},
{key : "	Lecture41 :	GitHub Pagesの使い方	"},
{key : "	Lecture42 :	Presentation投稿フォーム	"},
{key : "			"},
{key : "		Day11	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Instructor : 	Yusuke K	"},
{key : "	Lecture43 :	for...in ループ ウォーミングアップ	"},
{key : "	Lecture44 :	while ループと for ループ	"},
{key : "			"},
{key : "		Day12	"},
{key : "	Instructor : 	Urara	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture45 :	値としての関数	"},
{key : "	Lecture46 :	レビュー：関数	"},
{key : "			"},
{key : "		Day13	"},
{key : "	Instructor : 	Maekawa Satoshi	"},
{key : "	Instructor : 	Reito	"},
{key : "	Lecture47 :	アセスメント2	"},
{key : "	Lecture48 :	Closures（クロージャ）	"},
{key : "			"},
{key : "		Day14	"},
{key : "	Instructor : 	Urara	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture49 :	Closures（クロージャ） ウォーミングアップ	"},
{key : "	Lecture50 :	メソッド	"},
{key : "	Lecture51 :	DOM	"},
{key : "			"},
{key : "		Day15	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture52 :	DOM ウォーミングアップ	"},
{key : "	Lecture53 :	CSS と JavaScript	"},
{key : "	Lecture54 :	DOM イベント	"},
{key : "	Lecture55 :	アクティビティ「アリゲーター」	"},
{key : "			"},
{key : "		Day16	"},
{key : "	Instructor : 	Masakazu Terada	"},
{key : "	Instructor : 	Yusuke Kashiwagi	"},
{key : "	Lecture56 :	JavaScript ライブラリ	"},
{key : "			"},
{key : "		Day17	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Instructor : 	Tomohiro Kuba	"},
{key : "	Lecture57 :	高階関数入門	"},
{key : "	Lecture58 :	ポケモンプロジェクト	"},
{key : "			"},
{key : "		Day18	"},
{key : "	Instructor : 	Maekawa Satoshi	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Lecture59 :	高階関数入門 ウォーミングアップ	"},
{key : "	Lecture60 :	高階関数2.0	"},
{key : "	Lecture61 :	高階関数 + アロー関数	"},
{key : "			"},
{key : "		Day19	"},
{key : "	Instructor : 	Yusuke K	"},
{key : "	Instructor : 	Seijirou Kosaki	"},
{key : "	Lecture62 :	アセスメント3	"},
{key : "			"},
{key : "		Day20	"},
{key : "	Instructor : 	Naoko Matsui	"},
{key : "	Instructor : 	Yusuke K	"},
{key : "	Lecture63 :	最終日Zoomリンク【注意：最終日だけZoom URL変わります】	"},
{key : "	Lecture64 :	プロジェクト - プレゼンテーション	"},
]

console.log(contentOfEndroll.length);

//エンドロールのアニメーション動的設定
// const linehight = 20 //

//エンドロールの最後に表示する写真とメッセージ設定
const ending = {
  img: "thankyou.png",
  massage:"20日間 + フォローアップ 関係者の方々、本当にありがとうございました。居場所が1つ増えました!"
}


//ページ中央にページ背景色をランダムに変更するボタンを作成
document.getElementById('color-button').addEventListener('click', changeColor);

//背景色をランダムの作成する関数
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

//DOM定数化
const thankyouBtn = document.getElementById('thankyou-button');
const container = document.querySelector(".endroll-container");
const endroll = document.getElementById("endrolllist");

//ボタンを押されたら背景色を変更する関数
function changeColor() {
  document.body.style.backgroundColor = makeRandomColor();
}

//エンドロール開始のボタンを作成
thankyouBtn.addEventListener('click', playEndroll);

function playEndroll () {
  document.getElementById('color-button').style.display = "none";
  document.getElementById('thankyou-button').style.display = "none";
  document.body.style.backgroundColor = "black";
  container.classList.remove("hidden");

  //エンドロール本文追加
  contentOfEndroll.forEach( obj => {
    const ptag = document.createElement("p");
    ptag.textContent = `${obj.key}`;
    endroll.appendChild(ptag);
  });

  //エンドロール最後に写真追加
  const img = document.createElement("img");
  img.src = ending.img;
  img.alt = "Ending Image";
  img.classList.add("end-image");
  endroll.appendChild(img);

  //エンドロール最後にメッセージ追加
  const msg = document.createElement("p");
  msg.textContent = ending.massage;
  msg.classList.add("end-massage");
  endroll.appendChild(msg);

}

