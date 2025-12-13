"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let buki = [
  { id:1, name:"ボールドマーカー", sub:"カーリングボム", special:"ウルトラハンコ" },
  { id:2, name:"ボールドマーカーネオ", sub:"ジャンプビーコン", special:"メガホンレーザー" },
  { id:3, name:"もみじシューター", sub:"トーピード", special:"ホップソナー" },
  { id:4, name:"シャープマーカーGECK", sub:"ポイズンミスト", special:"アメフラシ" },
  { id:5, name:"プロモデラーMG", sub:"炭酸ボム", special:"サメライド" },
  { id:6, name:"プロモデラー彩", sub:"クイックボム", special:"スミナガシート" },
  { id:7, name:"スプラシューター煌", sub:"クイックボム", special:"テイオウイカ" },
];

// 一覧
app.get("/spl", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('spl1', {data: buki} );
});

// Create
app.get("/spl/create", (req, res) => {
  res.redirect('/public/spl.html');
});

// Read
app.get("/spl/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = buki[ number ];
  res.render('spl_detail', {id: number, data: detail} );
});

// Delete
app.get("/spl/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  buki.splice( req.params.number, 1 );
  res.redirect('/spl' );
});

// Create
app.post("/spl", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = buki.length + 1;
  const name = req.body.name;
  const sub = req.body.sub;
  const special = req.body.special;
  buki.push( { id: id, name: name, sub: sub, special: special } );
  console.log( buki );
  res.render('spl1', {data: buki} );
});

// Edit
app.get("/spl/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = buki[ number ];
  res.render('spl_edit', {id: number, data: detail} );
});

// Update
app.post("/spl/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  buki[req.params.number].name = req.body.name;
  buki[req.params.number].sub = req.body.sub;
  buki[req.params.number].special = req.body.special;
  console.log( buki );
  res.redirect('/spl' );
});

// Random
app.post("/spl/random", (req, res) => {
    const spl = Math.floor( Math.random() * buki.length );
    const randomname = buki[ spl ].name;
    res.render( 'spl1', {data: buki, randomresult: randomname} );
});

  app.listen(8080, () => console.log("Example app listening on port 8080!"));
  