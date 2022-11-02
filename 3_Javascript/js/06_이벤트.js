// 인라인 이벤트 모델 확인

function fnTest1(btn) {

    console.log(btn.style); // 선택한 요소에 적용할 수 있는 css속성 확인

    // JS로 요소에 CSS지정 시 inline 형식으로 CSS코드가 추가된다.
    btn.style.color = "white";
    btn.style.backgroundColor = "green";
    btn.style.cursor = "pointer";
}



// 고전 이벤트 모델
// 요소가 가진 이벤트 리스너 속성(변수)에 직접 함수(이벤트 핸들러)를 대입
document.getElementById("btn1").onclick = function() {
    alert("버튼이 클릭됨");

    // 고전/ 표준 이벤트 모델의 장점
    // 이벤트 제거 가능
    document.getElementById("btn").onmouseout = null;
}

// 하나의 요소에 여러 이벤트 추가 가능
document.getElementById("btn1").onmouseover =function() { 
    // 마우스가 요소 위로 올라왔을 때
    document.getElementById("btn1").style.backgroundColor = red;
}
document.getElementById("btn1").onmouseout =function() {
    // 마우스가 요소 밖으로 올라왔을 때
    document.getElementById("btn1").style.backgroundColor = yellow;
}


// 고전 이벤트 모델의 단점
// -한 요소에 동일한 이벤트 리스너에 대한 다수의 핸들러를 작성할 수 없다.
//  (마지막으로 대입된 이벤트 핸들러만 적용)
// 해결방법-> 표준 이벤트 모델
document.getElementById("btn1").onclick = function(){
    alert("새로운 이벤트 처리방법");
}



// 표준 이벤트 모델
const btn2 = document.getElementById("btn2");

//요소.addEventListener("이벤트명", 함수);
btn2.addEventListener("click", function() {
    // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소 
    this.style.backgroundColor = "pink";
    this.style.border = "2px solid black";
    this.style.padding = "10px";
    this.style.block= "block";
});

// 고전 이벤트 모델단점 보안 확인
btn2.addEventListener("click", function() {
    // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소 
    this.style.fontSize = "20px";
    this.style.fontFamily = "궁서";
    this.style.fontWeight = "bold";
});




// 배경색이 입력한 값으로 변하는 박스
document.getElementById("inputColor").addEventListener("keyup", function(){
    // 박스 요소 선택
    const div1 = document.getElementById("div1");

    // 배경색
    div1.style.backgroundColor = this.value;
});


    



