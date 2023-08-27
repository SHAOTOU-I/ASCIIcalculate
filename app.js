// 程式碼寫在這裡
document.addEventListener("DOMContentLoaded",function () {
    const plusBtn = document.querySelector("#plus");
    const minusBtn = document.querySelector("#minus");
    const counter = document.querySelector("#counter");

    plusBtn.addEventListener("click" ,function() {
        let s = Number(counter.value);
        s = s + 1;
        counter.value = s;
        console.log(counter.value);

    })

    minusBtn.addEventListener("click" ,function () {
        
        let s = Number(counter.value);
        if(counter.value > 0){
        s = s - 1;
        counter.value = s;
        // console.log("-");
    }
    })

})