import { Matrix } from 'my-test-mat';

// add function
export function add(a: number, b: number) {
  return a + b;
}

// minus function
export function minus(a: number, b: number) {
  return a - b;
}

// multiply function
export function multiply(a: number, b: number) {
  return a * b;
}

//test
export function divide(a: number, b: number) {
  return a / b;
}

// square function
export function square(a: number) {
  return a * a;
}

export function mat_add(mat1: number[][], mat2: number[][]): Matrix | void {
  const m1 = new Matrix(mat1);
  const m2 = new Matrix(mat2);
  console.log(m1);
  console.log(m2);
  return m1.add(m2);
}
