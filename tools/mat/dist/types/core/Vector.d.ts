export default class Vector {
    private list;
    constructor(list?: number[]);
    getDimension(): number;
    len: number;
    getItem(index: number): number;
    add(another: Vector): Vector | string;
    sub(another: Vector): Vector | string;
    mul(K: number): Vector;
    pos(): Vector;
    neg(): Vector;
    norm(): number;
    normalize(): Vector;
    dotMul(another: Vector): number | void;
    static zero(dim: number): Vector;
    toStr(): string;
}
