import React from "react";

// todo  typeScript 기초 실습
const a: string = "Hello";
const b: number = 1;
const c: boolean = false;
const d: undefined = undefined;
const e: undefined | number = 5;
const f: any = null;

console.log(a, b, c, d, e, f);

//* <---------------------------------------------------->

function getNumberThenReturnString(value: number): string {
  return value.toString();
}

getNumberThenReturnString(1);

//* <---------------------------------------------------->

const arrowFunc: (someValue: boolean) => void = (value) => {
  return value;
};

arrowFunc(false);

//* <---------------------------------------------------->

const someN = 123;

console.log(1 + someN);

const someObj = {
  hi: "there",
};

console.log(someObj);

//* <---------------------------------------------------->

const someGender: {
  gender: "male" | "female";
  age: number;
} = {
  gender: "male",
  age: 21,
} as const;

console.log(someGender);

//* <---------------------------------------------------->
// Todo Interface 1
interface Student {
  id: number;
  name: string;
  age: number;
}

//* <---------------------------------------------------->
// Todo Interface 2

interface SampleProps {
  name: string;
}

function Sample(props: SampleProps) {
  return <div>Sample</div>;
}

export default Sample;

//! interface는 객체만 생성 가능하다.

//* <---------------------------------------------------->
// Todo type

type Human = {
  name: string;
};

const human: Human = { name: "hi" };

console.log(human);

//* <---------------------------------------------------->
type Person = { name: string } & { age: number };
type Person2 = { name: string } | { age: number };

//* <---------------------------------------------------->
export type SomeNumber = number;

//* <---------------------------------------------------->
// todo : 변수의 제네릭
//! SomeNumberOrSomething 👉 number 이거나 제네릭으로 넣어준 타입
export type SomeNumberOrSomething<T> = number | T;

export const ss: SomeNumberOrSomething<string> = "aaaa";

//* <---------------------------------------------------->
// todo : 함수의 제네릭
//! 여기서 첫번째 T는 함수의 타입, 두번째 T는 매개변수 타입, 세번째 T는 리턴 타입
export function getValueReturnSomeValue<T>(value: T): T {
  return value;
}

const returnValue = getValueReturnSomeValue<string>("sting");

const returnValue2 = getValueReturnSomeValue("sting");

//* <---------------------------------------------------->
export type SomeType = ComponentProps<typeof Post>;

//* <---------------------------------------------------->
//todo : 옵션 값은 '?'로  표현
export type PersonType = {
  name: string;
  gender?: "male" | "female";
};

export const 이마크: PersonType = { name: "이마크" };

//todo : [Utility Type - require] 옵션 값인 gender를 필수값으로 바꾸고 싶다면?
export type PersonWithGender = Required<PersonType>;

export const 이제노: PersonType = {name "이제노", gender : "male"};


//todo : [Utility Type - omit] 특정 값을 빼고 싶다면? 
export type PersonTypeOnlyName = Omit<PersonType, 'gender'>;

//* Utility Type 참고문서
//* -  https://typescript-kr.github.io/pages/utility-types.html
//* -  https://www.typescriptlang.org/ko/docs/handbook/utility-types.html