// 실습-함수(4)

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: "Kim", age: 20, skill: "React" };
};

let kim = introduce();

const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

if (isDeveloper(kim)) {
  console.log(kim.skill);
} else {
  console.log(kim.age);
}
