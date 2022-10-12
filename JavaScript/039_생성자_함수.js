let book = {
    책이름:'완전정복 JavaScript',
    책가격:1000,
    저자:'홍길동',
    출판일:'22.10.11'
}

let newBook ={}
book['책이름'] = 'JavaScript' // 예를 들어 form에서 입력 받은 값
book['책가격'] = 1000000
book['저자'] = '세원, 석규, 슬기'
book['출판일'] = '22.10.30'


function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this
}

// let data =Book('CSS', 10, '유진','22.12.30')
// console.log(data) // undefine

let book1 =new Book('CSS', 10, '유진','22.12.30')
let book2 =Book('CSS', 10, '유진','22.12.30')
let book3 =new Book('CSS', 10, '유진','22.12.30')

// 생성자 함수 사용 이유는 ? 객체생성 용도 / 메모리 효율 / 간편성

