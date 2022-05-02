import { Hello } from "./Hello";

test(`Hello 가 에러 없이 실행되는가`, () => {
  expect(Hello).not.toThrow();
})