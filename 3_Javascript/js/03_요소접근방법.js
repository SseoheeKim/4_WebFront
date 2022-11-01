// id로 접근
function fnTest1() {

    // id가 div1인 요소를 얻어와 상수형 변수 div1에 저장
    const div1 = document.getElementById("div1");
    
    // 접근한 요소의 배경색을 얻어와 변수에 저장
    const bgColor = div1.style.backgroundColor;

    // JS는 equals사용 안 함
    if( bgColor == "red") {
        div1.style.backgroundColor = "yellow";
    } else {
        div1.style.backgroundColor = "red";
    }

}


// class로 접근
function fnTest2() {

    // 요소 여러 개를 한번에 접근하는 경우 배열 형태로 반환
    const arr = document.getElementsByClassName("div2");
    
    // 유사배열
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);


    arr[0].style.backgroundColor = "green";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "red";

    // Java와 for문 형식 같음
    for(let i=0; i<arr.length; i++){
        arr[i].innerHTML = i + "번째 요소 입니다."
    }

}


// 태그명으로 접근
function fnTest3() {

    //문서 내에 존재하는 모든 li요소들을 얻어와 배열 형식으로 반환
    const arr = document.getElementsByTagName("li");

    for(let i=0; i<arr.length; i++){
        const num = arr[i].innerText;

        arr[i].style.backgroundColor = "rgb(100,"+num+",130)";
    }
}


// input 태그값(value) 얻어오기/변경하기
function fnTest4(){

    // input요소 접근(id사용)
    const input = document.getElementById("inputTest");

    // input 태그에 작성된 값을 나타내는 속성 => value
    // == input태그는 종료태그가 없으므로 innerText로 값을 얻어오지 않고, value속성을 사용

    // input 요소에 작성된 값을 얻어와 alert로 출력
    alert(input.value);

    // input 요소에 ""(빈 문자열 대입) == 값을 삭제
    input.value="";

}


// name속성으로 접근
function fnTest5() {
    
    // name속성값으로 요소들을 얻어와 배열 형식으로 반환
    const hobby = document.getElementsByName("hobby");

    // console.log(hobby);


    let str = ""; // 체크된 체크박스의 value값을 누적할 변수 선언
    let cnt = 0; // 체크된 갯수
    
    for(let i=0; i < hobby.length; i++) {

        // .checked 속성 (radio, checkbox 전용 속성)
        // 해당 요소가 체크되어있다면 true, 아니면 false
        
        if(hobby[i].checked) {
            str += hobby[i].value + " ";
            cnt++;
        }
        
    }


    const result5 = document.getElementById("result5");
    if(str != "") {
        // result5.innerText = str;
        // result5.innerHTML += "<br><br>선택된 개수 : " + cnt;
        // inner..라는 값을 대입하는 것으로 += 누적사용

        result5.innerHTML = str + "<br><br>선택된 개수 : " + cnt;

    } else {
        result5.innerText = "선택된 취미가 없습니다.";
    }
}



// css선택자로 접근
function fnTest6() {

    // id속성값이 cssTest인 요소를 하나 선택
    // (여러 요소가 선택된다면 첫번째 요소만 선택)
    document.querySelector("#cssTest").style.border = "1px solid green";
    document.querySelector("#cssTest > div").style.backgroundColor = "gold";


    // 선택자에 맞는 모든 요소를 선택해 배열 형식으로 반환
    const arr = document.querySelectorAll("#cssTest > div");

    for(let i=0; i<arr.length; i++) {
        arr[i].style.fontSize = "30px";
    }
}



// kakao채팅 화면- 엔터키가 입력되었을 때(onkeydown)
function inputEnter() {
    if(window.event.key == "Enter") { // 눌린 key가 Enter인 경우
        readValue(); // 다른 함수 호출
    }
    
    // console.log(window.event.key); // 현재 눌러진 키 확인
    
    /* 키보드 입력과정
        키 누름 -> keydown 이벤트 -> input태그에 입력 -> keypress 이벤트 -> (손을 떼면서) keyup 이벤트

    keydown : 모든 키가 눌렸을 때
    keypress : 영어/숫자/특수문자/띄어쓰기가 눌러지고 있을 때
    -> 꾹 누르고 있으면 연속적으로 함수가 호출
    --> keyup 이용 시 1회만 인식   */
}


// 입력된 값을 읽어들여 채팅창에 출력
function readValue(){
    
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chattingInput");

    if(input.value.trim().length > 0) {
        // 문자열.trim() :문자열의 좌우 공백 제거(중간 공백 제거는 아님)
        // 공백이 아닐 경우에 채팅창에 내용 추가


        // 채팅창에 입력된 값으로 채팅 추가
        bg.innerHTML += "<p><span>"+ input.value+"</span></p>";
        

        // 채팅창의 화면이 차면 스크롤을 밑으로 내리기
        // 요소.scrollTop : 요소 내부 현재 스크롤의 위치
        // 요소.scrollTop = 위치 : 스크롤을 특정 위치로 이동
        // 요소.scrollHeight : 스크롤의 전체 높이
        bg.scrollTop = bg.scrollHeight;

    } else {
        alert("채팅 내용을 입력해주세요.");
    }
    
    // 문자가 추가됐건 아니건 입력창의 내용 삭제
    input.value="";
}
