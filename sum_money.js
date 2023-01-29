window.addEventListener("DOMContentLoaded", function(){
    let elCalc = document.querySelector("#calc");

    // ボタンを押した時の処理を追加
    elCalc.addEventListener("click", function(){
        // class='price'要素を全て選択
        let prices = document.querySelectorAll('.price');

        // 合計金額
        let priceSum = 0;
        for(let i = 0; i < prices.length; i++){
            let priceVal = prices[i].value;
            priceSum += parseInt(priceVal);
        }

        //　表示用のHTMLを作る
        let html = '合計金額:<strong>' + priceSum + '</strong>円</div>';

        // id='output'の要素のHTML文字列を追加
        document.querySelector('#output').innerHTML = html;
    });
});