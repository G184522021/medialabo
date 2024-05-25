//答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
let b1 = document.querySelector('button#print');
  b1.addEventListener('click', hantei);

function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let p3 = document.querySelector('input[name="kensaku"]');
  let yoso = parseInt(p3.value);

  //Number.parseInt(文字列 [,基数]);文字列から整数変換
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

kaisu = kaisu+1;
let kaisuSpan = document.querySelector('span#kaisu');
let answerSpan = document.querySelector('span#answer');
let resultP = document.querySelector('p#result');
let p = document.createElement("p");
kaisuSpan.textContent = kaisu;
answerSpan.textContent = yoso;

if (kaisu >=4) {
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("答えは"+kotae+"でした．すでにゲームは終わっています");
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "答えは"+kotae+"でした．すでにゲームは終わっています";
    p.insertAdjacentElement('afterend' ,resultP);

} else if (kaisu<= 2 && yoso < kotae) {
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("まちがい.答えはもっと大きいですよ");
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "まちがい.答えはもっと大きいですよ";
    p.insertAdjacentElement('afterend' ,resultP);

} else if (kaisu<= 2 && yoso > kotae) {
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("まちがい.答えはもっと小さいですよ")
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "まちがい.答えはもっと小さいですよ";
    p.insertAdjacentElement('afterend' ,resultP);

} else if (yoso === kotae){
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("正解です.おめでとう");
    kaisu= kaisu + 3;
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "正解です.おめでとう";
    p.insertAdjacentElement('afterend' ,resultP);

}  else if (kaisu === 3){
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("まちがい.残念でした答えは"+kotae+"です");
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "まちがい.残念でした答えは"+kotae+"です";
    p.insertAdjacentElement('afterend' ,resultP);
}

}