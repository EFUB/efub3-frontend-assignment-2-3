const sum1 = (a: number, b: number): number => a + b;
console.log(sum1(1, 2));

// 옵셔널, 병합 연산자
const sum2 = (a: number, b?: number, c?: number): number => {
	// if (!!b && !!c) return a + b + c;
	// else if (!!b) return a + b;
	// else return a;
	return a + (b ?? 0) + (c ?? 0);
};
console.log(sum2(1));
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3));

// 함수 호출 시그니처
let sum3: (a: number, b?: number, c?: number) => number;
sum3 = function (a, b, c) {
	return a + (b ?? 0) + (c ?? 0);
};
console.log(sum3(10));
console.log(sum3(10, 20));
console.log(sum3(10, 20, 30));

// 사용자 정의 타입 가드 함수
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
const isDeveloper = (target: Developer | Person): target is Developer =>
	(target as Developer).skill !== undefined;
if (isDeveloper(kim)) {
	console.log(kim.skill);
} else {
	console.log(kim.age);
}

// 인터페이스
interface Sum {
	(a: number, b: number): number;
}
const sum4: Sum = (a, b) => a + b;
console.log(sum4(1, 2));

// 인터페이스 확장
interface Person {
	name: string;
	age: number;
}
interface Me extends Person {
	phone: string;
}
interface Person {
	hi: "hi";
}
const me: Me = {
	name: "",
	age: 0,
	phone: "010-1234-5678",
	hi: "hi",
};
console.log(me);
