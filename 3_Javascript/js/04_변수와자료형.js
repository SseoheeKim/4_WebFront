
var str = "JS코드를 함수가 아닌 JS파일 또는 script태그 내부에 바로 작성하면"
        + " HTML랜더링 시 바로 수행된다.";

console.log(str);


// 변수 선언 위치에 따른 구분
var num1 = 100; // 전역변수
num2 = 200; // 전역변수

console.log("num1 : " + num1);
console.log("num2 : " + num2);


function test(){
    var num3 = 300; // function의 지역변수
    num4 = 400; // 전역변수

    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num4 : " + num4);

    if( num3 == 300) {
        var num5 = 500; // !!! function 내 지역변수!!!!!!
        num6 = 600; // 전역변수
    }

    console.log("if문 종료 후 num5 : " + num5 );
    console.log("if문 종료 후 num6 : " + num6 );
}

// 함수는 호출 시 내부 작성된 코드가 작동
test(); 


// console.log("함수 외부 num3 :" + num3); 
// num3 is not defined -> 함수의 종료 후에는 사용 불가
// * script 언어는 중간에 에러 발생 시 해석을 멈추고 아래 작성 내용은 실행 안 함.

console.log("함수 외부 num4 : " + num4);
// num4는 전역변수로 함수 종료 후에도 사용 가능


// console.log("함수 종료 후 num5 : " + num5 );
// num5 is not defined 
console.log("if문 종료 후 num6 : " + num6 );


// var변수명 중복 확인
var num1 = 999;
console.log("위에서 선언한 var num1 중복 확인 : "+ num1);


//------------------------------------------------------------------------------------

// 자료형 확인 및 변수 선언 확인
function typeTest(){

    let temp1 = 100;
    // let temp1 = 200; -> 변수명은 중복 불가
    // 블록 범위의 변수 'temp1'은 다시 선언할 수 없다.


    if(temp1==100) {

        // 블록 범위 확인
        let temp2 = 200;
        const temp3 = 300; 
        // temp3 = 400; // Assignment to constant variable.
                        // ->상수형 변수에 값을 할당해서 에러발생
    }

    console.log(temp1);
    // console.log(temp2);
    // console.log(temp3);

}

//------------------------------------------------------------------------------------

// 자료형 확인
const typeBox = document.getElementById("typeBox");
typeBox.innerHTML = ""; // typeBox 요소 내부의 내용을 빈 문자열로 선언 
                        // == 내부 내용 삭제

// const name2; // 상수는 선언과 동시에 초기화 필수

let name; // defined
typeBox.innerHTML += "name : " + name +" / " + typeof name; 

name = "홍길동"; // 변수를 초기화하지 않으면 undefined, 초기화와 동시에 String
typeBox.innerHTML += "<br><br>name : " + name +" / " + typeof name; 


// number
const age = 20;
const height = 181.5;

typeBox.innerHTML += "<br><br>age : " + age +" / " + typeof age; 
typeBox.innerHTML += "<br><br>height : " + height +" / " + typeof height; 


// boolean
const isTrue = true;
typeBox.innerHTML += "<br><br>isTrue : " + isTrue +" / " + typeof isTrue; 


// object(배열, JS객체)

// 배열 선언과 동시에 초기화
// Java (중괄호)
//  int[] arr = {10, 20, 30, 40, 50}; 

// JS (대괄호)
const arr = [10, 20, 30, 40, 50];
typeBox.innerHTML += "<br><br>arr : " + arr +" / " + typeof arr; 

for(let i=0; i<arr.length; i++) {
    typeBox.innerHTML += "<br>arr[" + i +"] = " + arr[i];
    arr[i]
}

// ** JS객체 ** 
// - K:V 쌍으로 이루어진 Map형식
// - key는 무조건 String
// - 리터럴 표기법 : 중괄호 {} 

// const user = {"K":V, "K":V};
const user = {"id":"user01", "pw":"pass01!", "age":25, "a":arr};
typeBox.innerHTML += "<br><br>user: " + user +" / " + typeof user; 
console.log(user);

// 객체에 저장된 값을 출력하기
typeBox.innerHTML += "<br>user.id : " + user.id; 
typeBox.innerHTML += "<br>user.pw : " + user.pw; 
typeBox.innerHTML += "<br>user.age : " + user.age;
typeBox.innerHTML += "<br>user.a : " + user.a;
typeBox.innerHTML += "<br>user.a[2] : " + user.a[2];





// function
// 1) 변수명을 함수명처럼 사용( 변수명 == 함수명 )
const fnSum = function(n1, n2){ 
    return n1 + n2;
} 

// 함수명만 작성하는 경우 함수에 작성된 코드 자체가 반환
typeBox.innerHTML += "<br><br>fnSum: " + fnSum +" / " + typeof fnSum; 

// 함수명(매개변수) == 함수 호출(함수 코드가 수행됨)
typeBox.innerHTML += "<br><br>fnSum(1,2) : " + fnSum(1,2);



// 2) 함수를 매개변수로 전달하는 형태
// num == number, fn == function
function fnPlus(num, fn) {
    return num + fn();
} 

const result = fnPlus(100, function(){return 30-10;});

typeBox.innerHTML += "<br><br>result : " + result;