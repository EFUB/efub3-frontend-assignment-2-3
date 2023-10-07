interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}

const me: Me = {
  name: "jimin",
  age: 23,
  phone: "010-xxxx-xxxx",
};
