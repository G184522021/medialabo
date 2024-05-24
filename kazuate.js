//答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
kaisu = kaisu+1;

let kaisuSpan = document.getElementById('kaisu');
    let answerSpan = document.getElementById('answer');
    let resultP = document.getElementById('result');
    let p = document.createElement("p");
if (kaisu >=4) {
    kaisuSpan.textContent = kaisu;
answerSpan.textContent = yoso;
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("答えは"+kotae+"でした．すでにゲームは終わっています");
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "答えは"+kotae+"でした．すでにゲームは終わっています";
    p.insertAdjacentElement('afterend' ,resultP);
} else if (kaisu<= 2 && yoso < kotae) {
    kaisuSpan.textContent = kaisu;
answerSpan.textContent = yoso;
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("まちがい.答えはもっと大きいですよ");
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "まちがい.答えはもっと大きいですよ";
    p.insertAdjacentElement('afterend' ,resultP);
} else if (kaisu<= 2 && yoso > kotae) {
    kaisuSpan.textContent = kaisu;
answerSpan.textContent = yoso;
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("まちがい.答えはもっと小さいですよ")
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "まちがい.答えはもっと小さいですよ";
    p.insertAdjacentElement('afterend' ,resultP);
} else if (yoso === kotae){
    kaisuSpan.textContent = kaisu;
answerSpan.textContent = yoso;
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("正解です.おめでとう");
    kaisu= kaisu + 3;
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "正解です.おめでとう";
    p.insertAdjacentElement('afterend' ,resultP);
}  else if (kaisu === 3){
    kaisuSpan.textContent = kaisu;
answerSpan.textContent = yoso;
    console.log(kaisu+"回目の予想: "+ yoso);
    console.log("まちがい.残念でした答えは"+kotae+"です");
    resultP.textContent = kaisuSpan + "回目の予想： "+ answerSpan;
    resultP.textContent = "まちがい.残念でした答えは"+kotae+"です";
    p.insertAdjacentElement('afterend' ,resultP);
}

}