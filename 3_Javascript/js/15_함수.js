// 즉시 실행 함수 확인 1 - 페이지 로딩과 동시에 바로 수행
(function(){
    const str = "자바스크립트";
    console.log(str);
})();

// 즉시 실행 함수 확인 2
(function(){
    const str = "자바"; // 변수명 중복 X
    console.log(str);
})();


// -------------------------------------------------------------------
// 화살표 함수(Arrow Function)
// 1. 기본형태 ([매개변수]) => {};
document.getElementById("btn1").addEventListener("click",()=>{
    alert("화살표 함수의 기본 형태");
});


// 즉시 실행 함수 + 화살표 함수
(() => {console.log("즉시 실행 함수 + 화살표 함수");})();


// 2. 매개변수가 "하나"인 경우 ()생략 가능  : 매개변수 => {}
document.getElementById("btn2").addEventListener("click", e => {
    // 매개변수 e(또는 event) : event 관련 정보를 모두 갖고 있는 이벤트 객체
    console.log(e);

    // e.target : 이벤트가 발생한 대상(요소)
    console.log(e.target);
    e.target.style.backgroundColor = "yellow";


    // ************ 화살표 함수의 주의사항 ***************** */

    // 이벤트 핸들러로 화살표 함수를 사용할 경우, this는 window 객체를 나타낸다!!!
    // ****** 화살표 함수 내부에서 this사용 불가 → e.target으로 대체 *****

    console.log(this);
});

// 3. {}, return 생략 :  () => 값 또는 식
function print(fn){
    console.log(fn(2));

}

document.getElementById("btn3").addEventListener("click", () => {
    // 익명함수
    print (function(num) {return num * 2 });

    // 화살표 함수
    print( num => num * 100)

});
