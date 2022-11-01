// innerHTML로 읽어오기 (요소(태그+속성+내용)를 얻어와 문자열로 반환)
function getInnerHTML1() {
    // HTML 문서 내에서 id 속성값이 test1인 요소를 얻어와 상수형 변수 t1에 저장
    // 앞에 아무런 키워드가 없으면 일반 변수, 상수형 변수는 const키워드 사용
    const t1 = document.getElementById("test1");

    // console.log() -> 브라우저의 콘솔에 출력
    console.log(t1.innerHTML);
}

// innerHTML로 변경하기(태그와 속성도 함께 해석되어 반영(HTML Converter이용))
function setInnerHTML1(){
    const t1 = document.getElementById("test1");
    
    t1.innerHTML = "<b class=red>변경된<br><br> 내용입니다. </b>"; 
}


// innerHTML응용
function add(){

    // 1) id속성값이 "area1"인 요소에 얻어와 변수에 저장
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 새로운 내용을 누적
    area1.innerHTML += "<div class='area1-box'></div>";
    // area1.innerHTML += document.getElementsByClassName("area1-box")[0].outerHTML;
}


// 전역변수처럼 사용가능한 변수, 위아래 전부에서 사용 가능
const t2 = document.getElementById("test2");


//innerText로 읽어오기(내용만 얻어옴)
function getInnerText1(){
    // clg => console.log() 자동완성 (단, JS ES6 code snippets 확장팩 필요)
    console.log(t2);
    console.log(t2.innerHTML);
    console.log(t2.innerText);
}


// innerText로 변경하기
function setInnerText1(){
    t2.innerText = "<p class='red'>변경된 내용입니다.</p>";
}



// confirm
function fnConfirm() {
    // console.log( confirm("테스트") ); // 콘솔 로그창에 true/faluse반환 확인

    // 조건문(if, switch) 작성문법은 JAVA와 동일
    if(confirm("배경색을 분홍색으로 바꾸시겠습니까?")){ // 확인
        document.getElementById("confirmTest").style.backgroundColor="pink";

    } else { // 취소
        document.getElementById("confirmTest").style.backgroundColor="gray";

    }

}



// prompt
function fnPrompt(){
    
    const input = prompt("변경할 버튼명을 입력하세요.");
    // input == 입력한 값 or null

    if( input != null) {
        document.getElementById("promptTest").innerText = input;

    } else {
        alert("취소되었습니다.");
    }
}