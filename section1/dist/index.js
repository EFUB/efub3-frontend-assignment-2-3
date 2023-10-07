const introduce = () => {
    return { name: "Kim", age: 20, skill: "React" };
};
let kim = introduce();
/*
  kim을 매개변수로 받아 kim의 타입이 Developer인지 판단하는 사용자 정의 타입 가드 함수 isDeveloper를 작성하세요.
  */
const isDeveloper = (target) => {
    return target.skill !== undefined;
};
if (isDeveloper(kim)) {
    console.log(kim.skill);
}
else {
    console.log(kim.age);
}
export {};
