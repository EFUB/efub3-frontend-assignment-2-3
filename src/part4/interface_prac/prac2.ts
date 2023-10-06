// 실습-인터페이스(2)

interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}
const me: Me = {
  name: "user",
  age: 23,
  phone: "010-xxxx-xxxx",
};

console.log(me.name);
