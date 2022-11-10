// 추가(add) 버튼 클릭시 input 추가

document.getElementById("add").addEventListener("click", function(){
    // document.createElement("태그명") : 해당 태그 요소를 생성하여 반환

    // <div class="row">
    //     <input type="number" class="in">
    //     <span class="remove">&times;</span>
    // </div>

    // div요소 생성 ------------------------------------------------------------
    // 전체를 감싸는 div 생성
    const div = document.createElement("div");

    // div요소에 클래스 row 추가
    div.classList.add("row");


    // input요소 생성 ------------------------------------------------------------
    // input 요소 생성
    const input = document.createElement("input");

    // input요소에 클래스 in 추가
    input.classList.add("in");


    // input의 기본 속성은 type="text"이기 때문에 속성 변경 필요
    // * 요소에 속성을 추가하거나 변경할 때 사용하는 함수 → 요소.setAttribute("속성명", "속성값");
    // <-> 반대로 속성을 제거하는 함수 → 요소.removeAttribute("속성명");
    input.setAttribute("type", "number");


    // span 요소 생성 ------------------------------------------------------------
    // 동적으로 생성된 span
    const span = document.createElement("span");

    // span에 remove클래스 추가
    span.classList.add("remove");

    // span에 &times;
    span.innerHTML = "&times;";


    // span에 click 이벤트 동작 추가(동적 요소 추가)
    span.addEventListener("click", function(){
        // alert("동적 요소에 이벤트 추가 확인");

        // 클릭된 X버튼의 부모 요소(div.row)삭제
        // 요소.remove() : 해당 요소를 제거
        this.parentElement.remove();
    });



    // div > input, span ------------------------------------------------------------
    div.append(input, span);

    //.container(전체)에 div(row)를 마지막 자식으로 추가
    document.querySelector(".container").append(div);

    input.focus(); // 화면에 추가된 input에 포커스

})


// HTML문서 해석시 초기에 remove라는 클래스를 가진 요소가 존재하지 않기 때문에
// remove에 이벤트 동작 추가 구문에 요소가 적용되지 않는다.

// 처음부터 있던 HTML요소 == 정적요소
// JS로 추가되는 요소 == 동적요소

// 아래 코드 불가능!!!!!
// const delBtn = document.querySelector(".remove");

// for(let item of delBtn) {
//     item.addEventListener("click", function(){
//         alert("삭제");
//     })
// }



// 계산버튼으로 모든 값 계산
const calc = document.getElementById("calc");
calc.addEventListener("click", function(){
    
    const num = document.getElementsByClassName("in");
    // 함수는 호출된 시점의 HTML 화면을 기반으로 해석 진행
    // console.log(num);

    let sum = 0;
    for(let i=0; i<num.length; i++) {
        sum +=  Number(num[i].value); 
    }

    alert("합계 : " + sum);

})