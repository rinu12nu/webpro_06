"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let splbuki = [
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
  res.render('spl1', {data: splbuki} );
});

// Create
app.get("/spl/create", (req, res) => {
  res.redirect('/public/spl.html');
});

// Read
app.get("/spl/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = splbuki[ number ];
  res.render('spl_detail', {id: number, data: detail} );
});

// Delete
app.get("/spl/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  splbuki.splice( req.params.number, 1 );
  res.redirect('/spl' );
});

// Create
app.post("/spl", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = splbuki.length + 1;
  const name = req.body.name;
  const sub = req.body.sub;
  const special = req.body.special;
  splbuki.push( { id: id, name: name, sub: sub, special: special } );
  console.log( splbuki );
  res.render('spl1', {data: splbuki} );
});

// Edit
app.get("/spl/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = splbuki[ number ];
  res.render('spl_edit', {id: number, data: detail} );
});

// Update
app.post("/spl/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  splbuki[req.params.number].name = req.body.name;
  splbuki[req.params.number].sub = req.body.sub;
  splbuki[req.params.number].special = req.body.special;
  console.log( splbuki );
  res.redirect('/spl' );
});

// Random
app.post("/spl/random", (req, res) => {
    const spl = Math.floor( Math.random() * splbuki.length );
    const randomname = splbuki[ spl ].name;
    res.render( 'spl1', {data: splbuki, randomresult: randomname} );
});

let animal = [
    { id:1, name:"1ごう", type:"ネコ", character:"ハキハキ", birthday:"8月1日" },
    { id:2, name:"ジャスミン", type:"コグマ", character:"普通", birthday:"5月18日" },
    { id:3, name:"ジャック", type:"ネコ", character:"キザ", birthday:"10月1日" },
    { id:4, name:"ジュン", type:"リス", character:"キザ", birthday:"9月29日" },
    { id:5, name:"ちゃちゃまる", type:"ヒツジ", character:"ハキハキ", birthday:"3月18日" },
    { id:6, name:"みすず", type:"コグマ", character:"オトナ", birthday:"3月10日" },
    { id:7, name:"ミッチェル", type:"ウサギ", character:"ぼんやり", birthday:"5月19日" },
    { id:8, name:"ラムネ", type:"ネコ", character:"普通", birthday:"3月27日" },
    { id:9, name:"リリアン", type:"ウサギ", character:"元気", birthday:"5月9日" },
    { id:10, name:"ロボ", type:"オオカミ", character:"コワイ", birthday:"11月25日" },
  ];
  
  // 一覧
  app.get("/animal", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('animal1', {data: animal} );
  });
  
  // Create
  app.get("/animal/create", (req, res) => {
    res.redirect('/public/animal.html');
  });
  
  // Read
  app.get("/animal/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = animal[ number ];
    res.render('animal_detail', {id: number, data: detail} );
  });
  
  // Delete
  app.get("/animal/delete/:number", (req, res) => {
    // 本来は削除の確認ページを表示する
    // 本来は削除する番号が存在するか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    animal.splice( req.params.number, 1 );
    res.redirect('/animal' );
  });
  
  // Create
  app.post("/animal", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const id = animal.length + 1;
    const name = req.body.name;
    const type = req.body.type;
    const character = req.body.character;
    const birthday = req.body.birthday;
    animal.push( { id: id, name: name, type: type, character: character, birthday: birthday } );
    console.log( animal );
    res.render('animal1', {data: animal} );
  });
  
  // Edit
  app.get("/animal/edit/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = animal[ number ];
    res.render('animal_edit', {id: number, data: detail} );
  });
  
  // Update
  app.post("/animal/update/:number", (req, res) => {
    // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    animal[req.params.number].name = req.body.name;
    animal[req.params.number].type = req.body.type;
    animal[req.params.number].character = req.body.character;
    animal[req.params.number].birthday = req.body.birthday;
    console.log( animal );
    res.redirect('/animal' );
  });
  
  let youkai = [
    { id:1, name:"ジバニャン", type:"プリチー", rank:"D", skill:"まえのめり", soultimate:"ひゃくれつ肉球" },
    { id:2, name:"コマさん", type:"プリチー", rank:"D", skill:"「あ」", soultimate:"ひとだま乱舞" },
    { id:3, name:"メラメライオン", type:"イサマシ", rank:"C", skill:"もえるとうし", soultimate:"正拳バーニング" },
    { id:4, name:"キュウビ", type:"フシギ", rank:"S", skill:"きゅうかく", soultimate:"紅蓮地獄" },
    { id:5, name:"オロチ", type:"ニョロロン", rank:"S", skill:"オロチャージ", soultimate:"やまたのおろち" },
    { id:6, name:"イヌニャン", type:"ゴーケツ", rank:"B", skill:"きびだんご", soultimate:"犬猫ワンニャン肉球" },
    { id:7, name:"キズナース", type:"ポカポカ", rank:"B", skill:"きずなめ", soultimate:"ナメナメ集中治療" },
    { id:8, name:"魔ガサス", type:"ウスラカゲ", rank:"A", skill:"おれないハート", soultimate:"魔ガサスショック" },
    { id:9, name:"トホホギス", type:"ブキミー", rank:"E", skill:"風あそび", soultimate:"トホホの砲" },
  ];
  
  // 一覧
  app.get("/youkai", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('youkai1', {data: youkai} );
  });
  
  // Create
  app.get("/youkai/create", (req, res) => {
    res.redirect('/public/youkai.html');
  });
  
  // Read
  app.get("/youkai/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = youkai[ number ];
    res.render('youkai_detail', {id: number, data: detail} );
  });
  
  // Delete
  app.get("/youkai/delete/:number", (req, res) => {
    // 本来は削除の確認ページを表示する
    // 本来は削除する番号が存在するか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    youkai.splice( req.params.number, 1 );
    res.redirect('/youkai' );
  });
  
  // Create
  app.post("/youkai", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const id = youkai.length + 1;
    const name = req.body.name;
    const type = req.body.type;
    const rank = req.body.rank;
    const skill = req.body.skill;
    const soultimate = req.body.soultimate;
    youkai.push( { id: id, name: name, type: type, rank: rank, skill: skill, soultimate: soultimate } );
    console.log( youkai );
    res.render('youkai1', {data: youkai} );
  });
  
  // Edit
  app.get("/youkai/edit/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = youkai[ number ];
    res.render('youkai_edit', {id: number, data: detail} );
  });
  
  // Update
  app.post("/youkai/update/:number", (req, res) => {
    // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    youkai[req.params.number].name = req.body.name;
    youkai[req.params.number].type = req.body.type;
    youkai[req.params.number].rank = req.body.rank;
    youkai[req.params.number].skill = req.body.skill;
    youkai[req.params.number].soultimate = req.body.soultimate;
    console.log( youkai );
    res.redirect('/youkai' );
  });


  app.listen(8080, () => console.log("Example app listening on port 8080!"));
