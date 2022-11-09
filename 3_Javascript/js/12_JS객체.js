// 객체생성 1
document.getElementById("objBtn1").addEventListener("click", function(){

    // ****** {} 객체 생성 및 다루기 *****
    // JS객체의 key는 무.조.건. string(묵시적 string)
    // -> key작성 시 "",'', (따옴표x)이든 모두 다 string으로 인식
    //    그래도 서로 알아볼 수 있게 따옴표도 같이 쓰자

    const brand = "스타벅스";

    const product = {
        "pName" : "텀블러",
        'brand' : "투썸",
        color   : ['red', 'black', 'silver'],
        price   : 30000,

        // 객체를 생성할 때 변수에 기능(함수)도 가능 == 객체의 기능 
        information : function() {
            console.log(brand); // == 스타벅스
            // 객체 내부 함수에서 변수명을 사용하면
            // 해당 객체의 key가 아닌 전역변수가 우선순위를 갖는다.
            // 왜? 같은 객체의 변수를 선택하는 방법이 별도 존재하기 때문에

            // ** 객체 내부의 this == 현재 객체 **
            console.log(this.brand);
            console.log(this.pName);
        
            // 객체를 직접 사용하지 않고 this를 사용하는 이유는
            // JS는 다른 언어에 비해 자유도가 높은 언어이기 때문에 this를 사용

        }
    };
    

    console.log(product);
    
    // 객체의 기능을 호출( ()괄호 사용 ) 
    product.information();




    // 객체가 가지고 있는 값 출력하기
    const div1 = document.getElementById("div1");

    div1.innerHTML = ""; // 이전 내용 모두삭제

    // 객체 값을 얻어오거나 대입
    // 1) 얻어오기 : 객체명.key 
    //               객체명['key']

    // 2) 대입하기 : 객체명.key = 값; 
    //               객체명['key'] = 값;

    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>"

    // price값을 변경하기(대입)
    product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>"

    // JS 객체에 없는 key에 value대입
    // 새로운 키를 자유롭게 추가할 수 있다!
    product.size = "550ml";
    console.log(product);
    div1.innerHTML += "product.size : " + product.size + "<br>";
    div1.innerHTML += "<hr>"

    // 객체의 key 제거방법
    // const obj = {};
    // obj.a = 10;
    // obj.b = 20;
    // 비어있는 객체에 자유롭게 key & value추가 가능
    // key를 삭제하려면 delete obj.a;


    // 객체명['key']
    div1.innerHTML += "product['size'] : " + product['size'] + "<br>";
    div1.innerHTML += "<hr>"
    
    // 객체명['key']방법으로 객체가 가진 모든 값 출력하기
    // -> for in구문(객체 전용 for문)
    // for(let key in 객체명) : 향상된 for문 형태로 key를 꺼내옴
    // 객체의 key는 모두 string
    for(let key in product) {
        div1.innerHTML += product[key] + "<br>";
    }

})




// 생성자 함수
document.getElementById("objBtn2").addEventListener("click",function() {

    const div2 = document.getElementById("div2");
    div2.innerHTML = "";


    const stdList = []; // 비어있는 배열

    // 2) 생성자 함수 호출 : "new" 생성자 함수명(매개변수) 
    stdList.push( new Student(1, 2, "홍길동"));
    stdList.push( new Student(2, 1, "김길동"));
    stdList.push( new Student(3, 5, "박길동"));
    stdList.push( new Student(1, 3, "이길동"));

    // for of문 : 배열/컬렉션 요소 반복 접근을 위한 향상된 for문
    for(let std of stdList) {
        

        // for in : 객체의 키 반복접근을  위한 for문 (순서가 불일치)
        for (let key in std) {


            // std[key]의 자료형이 fuction이면 실력 후 출력
            if( typeof std[key] == 'function') {
                div2.innerHTML += key + " : "+ std[key] + "<br/>"
                
            }else {
                div2.innerHTML += key + " : "+ std[key] + "<br/>"

            }
        }
        div2.innerText += "<hr>"
}
    // console.log(stdList);
}) ;


// 1. 생성자 함수 정의 :생성자 함수의 시작은 반드시 대문자
// JS 함수의 매개변수는 let, const, var를 작성하지 않아도 해당 함수의 지역변수로 인식
function Student(grade, ban, name) {
    // 생성자 함수에서의 this == new 연산자를 통해 만들어지는 객체
    //                           (앞으로 만들어질 객체)
    
    // 속성
    this.grade = grade;
    this.ban = ban;
    this.name = name;
    // 매개변수 값을 생성되는 객체에 대입


    // 기능
    this.introduce = function() {
        return this.grade + "학년 " + this.ban + "반 " + this.name;
    }

}




// JSON
document.getElementById("jsonbtn").addEventListener("click", function(){
    
    // JSON.stringify(JS객체) : JS객체 -> JSON문자열 변환
    const std = new Student(5, 7, "차길동");
    console.log(std);
    console.log(JSON.stringify(std)); // JS객체 -> JSON
    // *** JSON변환 시 객체의 기능은 미.포.함
    //      -> JSON은 데이터 전달에 특화된 형태


    // JSON.parse(JSON문자열) : JSON문자열 -> JS 객체 변환
    const member = '{"memberId":"user01","memberPw":"pass01","age":20}';
    console.log(member); 
    console.log(JSON.parse(member)); // JSON -> JS 객체
})