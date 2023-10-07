interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}

const me: Me = {
  name: "soo",
  age: 22,
  phone: "01064546546",
};
