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
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog; // 업캐스트 가능
//dog = animal; // 다운캐스트 불가능

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: "reactjs", // 초과하는 프로퍼티 오류 발생
};

function func(book: Book) {}
func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: "reactjs", // 함수 매개변수에도 동일하게 오류 발생
});
// let book3: Book = programmingBook; // 미리 만들어둔 변수로 초기화하면 ok
