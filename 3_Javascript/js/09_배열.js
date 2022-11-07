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
    
    // 2. 배열.forEach( function(item,index){반복 수행 코드} )  -> 배열에만 사용
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스

    arr4.forEach(function(arr,i) {
        console.lon(i +":" + arr);
    });
});