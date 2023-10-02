type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;

let num3 = 10 as unknown as string;

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;

function func(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

type Person1 = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person1) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

type Admin = {
  name: string;
  kickCount: number;
};

type Member = {
  name: string;
  point: number;
};

type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  if ("kickCount" in user) {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if ("point" in user) {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

type Admin2 = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member2 = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest2 = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

function login2(user: User) {
  if (user.tag === "ADMIN2") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === "MEMBER2") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}