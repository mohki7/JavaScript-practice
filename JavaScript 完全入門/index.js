window.addEventListener("DOMContentLoaded", function(){
    const order = prompt('注文を入力してください。', 'コーヒー');
    if (order === null){
        this.alert('またのお越しをお待ちしております');
    }else{
        const takeout = confirm("${order}ですね。店内でお召し上がりですか？");
        if (takeout){
            alert('席をご用意しますのでお待ちください');
        }else{
            this.alert('お持ち帰りですね');
        }
    }
});