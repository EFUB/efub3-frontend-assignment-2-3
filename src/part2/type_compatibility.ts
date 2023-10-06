// 객체 타입의 호환성
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업캐스트 가능
// dog = animal; 다운캐스트 불가능

// 초과 프로퍼티 검사
type Book = {
  name: string;
  price: number;
};

type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book2: Book = {
  name: "리액트",
  price: 33000,
  // skill: 'reactjs',
  // 객체 리터럴로 초기화 시 초과하는 프로퍼티가 있으면 오류 발생
};

function func(book: Book) {}

func({
  name: "리액트",
  price: 33000,
  // skill: 'reactjs'
});
// 함수의 매개변수에도 동일하게 오류 발생
