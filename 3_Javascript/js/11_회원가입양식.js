// * 아이디 : 값이 변했을 때
const id = document.getElementById("inputId");

id.addEventListener("change", function(){
    // 영어 소문자로 시작하고,
    // 영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14 글자 사이 문자열인지 검사
    const regEx = /^[a-z][\w_-]{5,13}$/;
    
    // - 형식이 일치할 경우
    // 입력창의 배경색을 springgreen 으로 변경
    // - 형식이 일치하지 않은 경우
    // 입력창의 배경색을 red, 글자색을 white 로 변경

    if(regEx.test(this.value)){
        this.style.backgroundColor = "springgreen";
        this.style.color="black";

    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////


const pw = document.getElementById("inputPw");
const confirmPw = document.getElementById("confirmPw");

// * 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
confirmPw.addEventListener("keyup", function() {
    // "비밀번호" 를 미입력한 상태에서 "비밀번호 확인"을 작성할 경우
    
    if(pw.value.trim().length == 0){
        // '비밀번호를 입력해주세요' 경고창 출력 후
        alert("비밀번호를 입력해주세요."); 

        // "비밀번호 확인"에 작성된 내용을 모두 삭제하고
        confirmPw.value=""; 

        // focus 를 "비밀번호" 입력창으로 이동
        pw.focus();
    }

})


const pwMessage = document.getElementById("pwMessage");
// //- 비밀번호가 일치할 경우
// "비밀번호" 입력창 오른쪽에 "비밀번호 일치" 글자를 초록색으로 출력.

// - 비밀번호가 일치하지 않을 경우
// "비밀번호" 입력창 오른쪽에 "비밀번호가 불일치" 글자를 빨간색으로 출력.
pw.addEventListener("keyup", function() {
    if(pw.value == confirmPw.value) {
        pwMessage.innerText = "비밀번호 일치";
        // pwMessage.style.color = "green"; // 직접 css추가
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");

    } else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
    }
    
})

confirmPw.addEventListener("keyup", function() {
    if(pw.value == confirmPw.value) {
        pwMessage.innerText = "비밀번호 일치";
        // pwMessage.style.color = "green"; // 직접 css추가
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");

    } else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
    }
})

// 비밀번호, 비밀번호 확인 합쳐서 코드 줄이는 방법은?????????????


/////////////////////////////////////////////////////////////////////////////////////////////////


// * 이름 : 값이 변화했을 때
const inputName = document.getElementById("inputName");

inputName.addEventListener("change", function(){
    
    // 한글 2~5 글자 사이 문자열인지 검사
    const regEx = /^[가-힣]{2,5}$/;
    

    // - 형식이 일치할 경우
    // "이름" 입력창 오른쪽에 "정상입력" 글자를 초록색으로 출력.
    const nameMessage = document.getElementById("nameMessage");
    if(regEx.test(this.value)) {
        nameMessage.innerText="정상입력";
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");

    // - 형식이 일치하지 않는 경우
    // "이름" 입력창 오른쪽에 "한글만 입력하세요" 글자를 빨간색으로 출력.    
    } else {
        nameMessage.innerText="한글 2~5글자로 입력하세요.";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");
    }
} )



/////////////////////////////////////////////////////////////////////////////////////////////////




// * 회원가입 버튼 클릭 시 : validate() 함수를 호출
function validate() {
    
    // 성별이 선택 되었는지, 전화번호가 형식에 알맞게 작성되었는지 검사
    // - 성별이 선택되지 않은 경우
    // "성별을 선택해주세요." 경고창(==대화상자) 출력 후
    // submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함.
    
    /* 성별 선택 방법1) 
    const gender = document.getElementsByName("gender");

    if(!gender[0].checked && !gender[1].checked ) {
        alert("성별을 선택해주세요.");
        return false; // submit 기본 이벤트를 제거
    } */

    // 성별 선택 방법2)
    const gender = document.querySelector("[name='gender']:checked");
    // 체크가 된 성별 라디오 버튼만 얻어오기(체크된 게 없으면 null)
    if(gender == null) {
        alert("성별을 선택해주세요.");
        return false; // submit 기본 이벤트를 제거
    }


        
    // 전화번호 정규 표현식 : /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/
    // - 전화번호 형식이 올바르지 않을 경우
    // "전화번호의 형식이 올바르지 않습니다" 경고창(==대화상자) 출력 후
    // submit 기본 이벤트를 제거하여 회원가입이 진행되지 않게 함.

    const tel = document.getElementById("inputTel");
    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(! regEx.test(tel.value) ) {
        alert("전화번호의 형식이 올바르지 않습니다");
        return false;
    }

    return true;
}



/////////////////////////////////////////////////////////////////////////////////////////////////








