var sum1 = function (a, b) { return a + b; };
console.log(sum1(1, 2));
// 옵셔널, 병합 연산자
var sum2 = function (a, b, c) {
    // if (!!b && !!c) return a + b + c;
    // else if (!!b) return a + b;
    // else return a;
    return a + (b !== null && b !== void 0 ? b : 0) + (c !== null && c !== void 0 ? c : 0);
};
console.log(sum2(1));
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3));
// 함수 호출 시그니처
var sum3;
sum3 = function (a, b, c) {
    return a + (b !== null && b !== void 0 ? b : 0) + (c !== null && c !== void 0 ? c : 0);
};
console.log(sum3(10));
console.log(sum3(10, 20));
console.log(sum3(10, 20, 30));
var introduce = function () {
    return { name: "Kim", age: 20, skill: "React" };
};
var kim = introduce();
var isDeveloper = function (target) {
    return target.skill !== undefined;
};
if (isDeveloper(kim)) {
    console.log(kim.skill);
}
else {
    console.log(kim.age);
}
var sum4 = function (a, b) { return a + b; };
console.log(sum4(1, 2));
var me = {
    name: "",
    age: 0,
    phone: "010-1234-5678",
    hi: "hi",
};
console.log(me);
