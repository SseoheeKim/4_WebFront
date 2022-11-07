document.getElementById("btn1").addEventListener("click", function(){

    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과', '딸기', '바나나'];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);


    // 배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 인덱스가 추가되면서 길이가 증가되고, 자료형은 자동으로 동일하게 삽입

    arr1[0] = "김밥";
    arr1[1] = 5000
    arr1[2] = true;

    arr1[5]

    // for문으로 배열 요소 반복 접근하기
    // 1. 일반for문
    for(let i=0; i<arr4.length; i++){
        console.log(arr4[i]);
    }
    
    // 2. 배열.forEach( function( item,index ){반복 수행 코드} )  -> 배열에만 사용
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스

    // 여러 요소를 얻어온 경우(HTMLCollection, NodeList 등)는 배열이 아니므로 forEach()문을 쓸수 없다!
    // HTMLCollection(5) [li, li, li, li, li] 유사 배열이므로  for-Each 사용 불가
    arr4.forEach(function(a,i) {
        console.log(i +":" + a);
    });


    // 3. for( item of  배열(또는 컬렉션)) {} -> 배열, 컬렉션
    // 컬렉션도 반복접근 가능한 for-of 구문
    for(let item of arr4) {
        console.log(item);
    }
    
    
    // li 태그에 작성된 값을 얻어와 합 구하기
    const list = document.querySelectorAll("li"); // == NodeList
    // const list = document.getElementsByTagName("li") == HTMLCollection

    let sum=0;
    for(let item of list) {
        sum += Number(item.innerText);
    }
    console.log("sum =" + sum);


    // 4. for(let key in 객체) -> JS객체용 for문


 });


 // 배열 관련 함수 확인
 document.getElementById("btn2").addEventListener("click", function(){
    
    // 비어있는 배열 생성
    const arr = [];

    // 배열.push(값) : 배열의 마지막 요소로 추가(순서대로)
    arr.push("초밥");
    arr.push("쌀국수");
    arr.push("짜장면");
    arr.push("떡볶이");
    
    // 배열.toString() :배열 요소 사이에 "," 추가한 문자열로 반환
    console.log(arr.toString()); // .toString()은 생략 가능 


    // 배열.pop() : 배열의 마지막 요소를 꺼냄
    const temp = arr.pop();

    console.log("arr : " + arr.toString());
    console.log("temp : " + temp);
    

    // 배열.indexOf("값") : 일치하는 값을 가진 요소의 index를 반환, 없으면 -1 반환
    console.log("초밥 인덱스: " +arr.indexOf("초밥"));
    console.log("갈비가 arr에 포함되어 있는가? " + (arr.indexOf("갈비") != -1));

    // 배열.sort() : 배열 내 요소를 오름차순으로 정렬(문자열 기준)
    console.log(arr.sort());

    // 숫자 정렬의 문제점과 해결 방법
    const numArr = [5, 3, 2, 10, 1]; // 오름차순으로 정렬 시 1, 2, 3, 5, 10
    console.log(numArr.sort()); // 결과 : [1, 10, 2, 3, 5]
    // 배열.sort()는 문자열 기준으로 비교!!
    /* 
    "가나다" 3
    "가가가" 1
    "가나나" 2
    */
    console.log(numArr.sort(function(a,b) {return a-b;}));
    // ****** sort() 내에 function(a,b) {return a-b;}) 함수를 추가 ********

    // *sort() 함수는 원본 배열의 순서를 정렬
    // -> 원본 훼손 발생( 깊은 복사를 이용해 해결 가능 )
    console.log(numArr);

    // 배열.join("구분자")
    console.log(numArr.join("/"));

 });




// 로또 번호 생성
document.getElementById("lotto-btn").addEventListener("click", function(){
    const lotto = [];

    while(lotto.length < 6) { // 배열 번호가 6개 미만이면 반복
       
        const ran = Math.floor(Math.random()*45+1); //1~45 난수
       
        if( lotto.indexOf(ran)== -1 ) { // 로또 배열 내에 난수값이 없다면
            lotto.push(ran); // 마지막 요소로 추가
        }
    }

    lotto.sort(function(a,b){return a-b;});
    console.log("로또 번호 : " + lotto);
});