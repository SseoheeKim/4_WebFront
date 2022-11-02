// 전역변수 
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const result =document.getElementById("result");

// const n1 = Number(num1.value);  
// const n2 = Number(num2.value);
// 전역변수로 선언하면 위의 n1, n2는 0 / 랜더링에 주의!


// 함수를 정의하는 것은 코드가 있다는 것을 인식할 뿐 실제 수행은 X
// 함수를 호출해야만 내부 코드가 해석되면서 수행
function fnPlus() {

    // input에 입력한 값을 가져올 때는 .value 사용
    // 이때 얻어오는 값은 무조건 String
    // -> 여기서 숫자로 변환하기 위해서는 앞에 Number (형변환)

    // console.log(num1.value);
    // console.log(num2.value);

    // '함수가 호출'되었을 시점부터 내부코드가 해석되므로 
    // 함수 scope내에 변수 선언하고 값 초기화하여 사용
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.innerText = n1 + n2;
}


function fnMinus() {
    result.innerText = Number(num1.value) - Number(num2.value);
}

function fnMulti() {
    result.innerText = Number(num1.value) * Number(num2.value);
}

function fnDiv(){
    if(Number(num1.value) != 0 && Number(num2.value) != 0) {
        result.innerText = Number(num1.value) / Number(num2.value);
    } else {
        result.innerText = "0으로 나눌 수 없습니다.";
    }
}

function fnMod(){
    if(Number(num1.value) != 0 && Number(num2.value) != 0) {
        result.innerText = Number(num1.value) % Number(num2.value);
    } else{
        result.innerText = "0으로 나눌 수 없습니다.";
    }
}

