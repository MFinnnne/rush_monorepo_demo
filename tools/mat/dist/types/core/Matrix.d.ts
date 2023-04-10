import Vector from './Vector';
export default class Matrix {
    private twoDimArray;
    constructor(twoDimArray: number[][]);
    shape(): number[];
    getRowNum(): number;
    getColNum(): number;
    size(): number;
    len: () => number;
    rowVector(index: number): Vector;
    colVector(index: number): Vector;
    getItem(position: number[]): number;
    add(another: Matrix): Matrix | void;
    sub(another: Matrix): Matrix | void;
    mul(K: number): Matrix;
    division(K: number): Matrix;
    static zero(r: number, c: number): Matrix;
    mulVector(vector: Vector): Vector | void;
    mulMatrix(matrix: Matrix): Matrix | void;
    pos(): Matrix;
    neg(): Matrix;
    toStr(): string;
}
