// 정규표현식 객체 생성 및 확인하기

document.getElementById("check1").addEventListener("click", function(){

    // 정규표현식 객체 생성
    const regExp1 = new RegExp("script");
                    // script와 일치하는 문자열이 있는지 검사하는 정규(표현)식 객체
    const regExp2 = /java/;
                    // java와 일치하는 문자열이 있는지 검사하는 정규(표현)식 객체
    
    const str1 = "현재 javascript를 공부중입니다.";               
    const str2 = "'java, dv, jdbc, html, css, js, spring, mybatis'를 모두 사용중입니다.";
    const str3 = "java, java, java";

    // 확인하기
    console.log("regExp1.test(str1) : " + regExp1.test(str1)); // true
    console.log("regExp1.exec(str1) : " + regExp1.exec(str1)); // script

    console.log("regExp1.test(str2) : " + regExp1.test(str2)); // false
    console.log("regExp1.exec(str2) : " + regExp1.exec(str2)); // null

    console.log("regExp1.test(str3) : " + regExp1.test(str3)); // false
    console.log("regExp1.exec(str3) : " + regExp1.exec(str3)); // null
    

                
// 확인하기
    console.log("regExp2.test(str1) : " + regExp2.test(str1));
    console.log("regExp2.exec(str1) : " + regExp2.exec(str1)); 

    console.log("regExp2.test(str2) : " + regExp2.test(str2));
    console.log("regExp2.exec(str2) : " + regExp2.exec(str2)); 

    console.log("regExp2.test(str3) : " + regExp2.test(str3)); 
    console.log("regExp2.exec(str3) : " + regExp2.exec(str3)); 
    console.log( regExp2.exec(str3)); // null

});



// 메타문자확인하기

document.getElementById("check2").addEventListener("click", function() {

    // 결과 출력용 div
    const div1 = document.getElementById("div1");

    // div안의 내용 초기화(이전 내용 삭제)
    div1.innerHTML="";

    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regEx1 = /[abcd]/;

    div1.innerHTML += "/[abcd]/ , apple : " + regEx1.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd]/ , qwerty : " + regEx1.test("qwerty") + "<hr>";


    //  ^(캐럿) : 문자열의 시작을 의미 -> 사용 시 문자의 앞에 /^가/
    const regEx2 = /^group/;
    div1.innerHTML += "/^group/ , group100 : " + regEx2.test("group100") + "<hr>";
    div1.innerHTML += "/^group/ , 100group : " + regEx2.test("100group") + "<hr>";

    // ^[abcd] : 문자열이 a,b,c,d 중 하나로 시작하는지 검사
    const regEx3 = /^[abcd]/;
    div1.innerHTML += "/^[abcd]/ , group : " + regEx3.test("group") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , car : " + regEx3.test("car") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , dark : " + regEx3.test("dark") + "<hr>";

    // $(달러) : 문자열의 끝을 의미 -> 사용 시 문자의 뒤에 /가$
    const regEx4 = /team$/;
    div1.innerHTML += "/team$/ , A-team : " + regEx4.test("A-team") + "<hr>";
    div1.innerHTML += "/team$/ , team-A : " + regEx4.test("team-A") + "<hr>";

    // 특수문자를 제외한 문자 하나 ^[a-zA-Z0-9]$

})



// 이름 유효성 검사
document.getElementById("userName").addEventListener("keyup", function(){
    
    
    const regEx = /^[가-힣]{2,6}$/; // 이름 유효성 검사를 위한 정규식 객체

    const result1 = document.getElementById("result1");

    if( regEx.test(this.value) ) {
        // result1.innerHTML = "<span style='color: green;'>유효한 형식입니다.</span>";
        result1.innerText= "유효한 형식입니다.";

        // confirm 클래스를 추가하면서 다른 클래스(error)를 제거
        result1.classList.add("confirm", "test");
        // 클래스를 여러개 추가하고 싶을 때는 위에처럼 표현
        result1.classList.remove("error");

    } else {
        result1.innerText= "잘못된 형식입니다";
        // result1.style.color="red";
        result1.classList.add("error");
        result1.classList.remove("confirm");

    }

    // 요소.classList : 요소가 가지고있는 클래스를 배열로 반환
    // 요소.classList.add("클래스명") : 요소의 특정 클래스 추가 -> 계속 추가 
    // 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
    
    // 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 / 없으면 추가 -> 상황에 따른 사용
})