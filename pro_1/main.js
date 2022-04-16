// 객체 타입 : 값을 여러개 넣고 싶을때
let currencyRatio = {
   USD: {
      KRW: 1229.09,
      USD: 1,
      VND: 22901.00,
      unit: "달러",
   },
   KRW: {
      KRW: 1,
      USD: 0.00081,
      VND: 18.63,
      unit: "원",
   },
   VND: {
      KRW: 0.054,
      USD: 0.000044,
      VND: 1,
      unit: "동",
   },
};

let fromCurrency = "USD";
let toCurrency = "USD";

// 1. console.log(currencyRatio.VND.unit);

// console.log(currencyRatio['VND'].unit);

document
   .querySelectorAll("#from-currency-list a")
   .forEach((menu) => menu.addEventListener("click", function () {
      // 1. 버튼을 가져온다.
      // 2. 버튼의 값을 바꾼다.
      document.getElementById("from-button").textContent = this.textContent;
      // 3. 선택된 currency 값을 변수에 저장한다.
      fromCurrency = this.textContent;
      console.log("fromCurrency는", fromCurrency);
      convert("from");
   }));


document
   .querySelectorAll("#to-currency-list a")
   .forEach((menu) => menu.addEventListener("click", function () {
      document.getElementById("to-button").textContent = this.textContent;
      toCurrency = this.textContent;
      convert("from");
   }));

   //1. 키를 입력한 순간
   //2. 환전이 되서
   //3. 환전된 값이 보이게

   function convert(type){
      // 1. 환전
      // 2. 얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지
      // 돈 * 환율 = 환전금액
      if (type == "from"){
      let amount = document.getElementById("from-input").value;
      let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
      document.getElementById("to-input").value = convertedAmount;
   } else{
      let amount = document.getElementById("to-input").value;
      let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
      document.getElementById("from-input").value = convertedAmount;
   }
   };



   //1. 드랍다운 리스트에 값이 바뀔때 마다
   //2. 환전을 다시한다.

   // 반대로 밑의 박스에서 값을 입력해도 환전이 되게.