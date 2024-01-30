const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");

let display1Num = "";
let display2Num = "";
let result = null;
let lastOperation = "";

// 모든 값이 있을 경우 각 기호별로 계산 및 임시 결과창에 계산 결과 출력
function mathOperation() {
  switch (lastOperation) {
    case "×":
      result = parseFloat(result) * parseFloat(display2Num);
    case "+":
      result = parseFloat(result) + parseFloat(display2Num);
    case "−":
      result = parseFloat(result) - parseFloat(display2Num);
    case "÷":
      result = parseFloat(result) / parseFloat(display2Num);
    case "%":
      result = parseFloat(result) % parseFloat(display2Num);
  }
}

// number click
numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    display2Num += e.target.innerText;
    display2El.innerText = display2Num;
  });
});

// operation click
operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const operationSymbol = e.target.innerText;
    if (display1Num && display2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(display2Num);
    }
    clearVar(operationSymbol);
    lastOperation = operationSymbol;
  });
});

// equalEl click Event
equalEl.addEventListener("click", () => {
  if (!display1Num || !display2Num) {
    return;
  }
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  display2Num = result;
  display1Num = "";
});

// all clear
clearAllEl.addEventListener("click", () => {
  display1El.innerText = "0";
  display2El.innerText = "0";
  display1Num = "";
  display2Num = "";
  result = "";
  tempResultEl.innerText = "0";
});

// 첫번째 입력 숫자와 기호를 합쳐 출력하는 함수 및 임시 결과창에 값 출력
function clearVar(symbol = "") {
  display1Num += `${display2Num} ${symbol} `;
  display1El.innerText = display1Num;
  display2El.innerText = "";
  display2Num = "";
  // 임시 결과창에 저장한 값 출력
  tempResultEl.innerText = result;
}
