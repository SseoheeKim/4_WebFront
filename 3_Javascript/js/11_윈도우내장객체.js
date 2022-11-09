//window.setTimeout(함수, 지연시간(ms))
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    // 0초 red (클릭하자마자) 
    this.style.backgroundColor = "red"; 
    // 이벤트 핸들러에서 내의 this는 이벤트가 발생한 html요소


    // 3초 후 orange
    setTimeout(function() {
        // console.log(this); // setTimeout() 함수 내에서 this는 window객체
        btn1.style.backgroundColor = "orange";
    }, 3000);


    // 6초 후 yellow
    setTimeout(function() {
        btn1.style.backgroundColor = "yellow";
    }, 6000);

    // 9초 후 green
    setTimeout(function() {
        btn1.style.backgroundColor = "green";
    }, 9000);
})







// 현재 시간을 반환하는 함수
function currentTime() {
    const now = new Date(); // 현재 시간 정보를 저장하고 있는 객체를 생성

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();


    // 얻어온 시간값이 10미만일 경우 앞에 0추가
    if(hour<10) { hour = "0" + hour;}
    if(min<10) { min = "0" + min;}
    if(sec<10) { sec = "0" + sec;}
    
    return hour + " : " + min +" : " + sec;
}


const clock = document.getElementById("clock");
// 페이지가 로딩되자마자 #clolk에 현재 시간 출력
clock.innerText = currentTime();

// #clock에 1초마다 현재 시간을 출력
const interval = setInterval(function(){ // 함수를 변수에 저장 가능
    clock.innerText = currentTime();
}, 1000)


// window.clearInterval(setInterval()이 저장된 변수)
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(interval);
})



// 팝업창 열기
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function() {
    // 새탭에서 열기
    open("09_배열.html")
})

openPopup2.addEventListener("click", function() {
    // 최소한의 팝업창 형태로 열기
    open("09_배열.html", "_blank", "popup")
})

openPopup3.addEventListener("click", function() {
    // 옵션이 지정된 팝업창으로 열기
    // 옵션 작성 방법 "K:V,K:V,K:V", 크기 단위는 무조건 px로 고정
    const options = "width=400, height=500, top=50, left=100";
    open("09_배열.html", "popupWindow", options);
})




// 팝업창으로 데이터 전달하고 받아오기
document.getElementById("sendChild").addEventListener("click", function(){
    const options = "width=300, height=300, top=50, left=700";
    open("팝업.html", "popupWindow", options);

});


