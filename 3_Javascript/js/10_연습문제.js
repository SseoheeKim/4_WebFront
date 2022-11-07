const container = document.getElementsByClassName("container")[0];
// 클래스명, 태그명, name속성값, querySelectorAll()
// 요소를 얻어 올 때 배열 형식으로 반환!!!!!!
const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

// JS로 CSS추가
// container 클래스 요소에 display:flex;
container.style.display = "flex";

// area 클래스 요소에 높이 170px, 너비 150px, 테두리 1px 검정 실선
// display : flex, main-axis 방향 : 열(세로)

// 요소 하나하나에 접근하기 위해 for문 사용
// 일반 for문 || for of
for(let item of area) {
    // item == area 배열에 담긴 요소를 순차적으로 하나씩 꺼내 저장
    item.style.height = "170px";
    item.style.width = "150px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.flexDirection = "column";
}

// box 클래스 요소에 높이 150px, 아랫쪽 테두리 테두리 1px 검정 실선
for(let item of box) {
    item.style.height = "150px";
    item.style.borderBottom = "1px solid black"
}

// box-color 클래스 요소의 테두리와 outline 제거
for(let item of boxColor) {
    item.style.border = "none";
    item.style.outline = "none";
}



// box-color 클래스 요소에 입력된 컬러에 따라
// box-color를 감싼 box클래스 요소의 배경색을 변경
// + 입력된 input 요소의 글씨색도 함께 변경
for(let i=0; i<box.length; i++){

    boxColor[i].addEventListener("change", function(){
        box[i].style.backgroundColor = this.value;
        
        // boxColor[i].style.color = this.value;
        this.style.color = this.value;
    })
}



// 변경 시간 조정
// transition-duration 변경버튼을 클릭할 경우
// input1에 작성된 transition-duration을 모든 box요소에 추가
// transition-duration의 세팅 기본값은 초 단위(s)
document.getElementById("btn1").addEventListener("click", function(){
    // 엔터쳐도 가능하려면?????????????????????????
    const duration = document.getElementById("input1").value;
    document.getElementById("print1").innerText = duration;
    
    for(let item of box) {
        item.style.transitionDuration = duration + "s";
    }
    for(let item of boxColor) {
        item.style.transitionDuration = duration + "s";
    }
    // transition-duration의 세팅 기본값은 초 단위(s)!!!!!!!!!!!!!!!!!!!!
    
});


// #clearBtn 클릭 시 모든 요소를 초기화
document.getElementById("clearBtn").addEventListener("click", function(){

    for(let item of box) {
        item.style.backgroundColor = "";
    }

    for(let item of boxColor) {
        item.value = "";
    }
})