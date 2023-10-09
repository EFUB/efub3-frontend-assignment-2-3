// 인터페이스

interface Person {
  name: string;
  age: number;
  sayHi(): void;
}

const person: Person = {
  name: "홍길동",
  age: 50,
  sayHi: function () {
    console.log("Hi");
  },
};
