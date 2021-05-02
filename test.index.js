import {calc} from './index'

test("add", () => {
    expect(calc(2,'+',2)).toBe(4);
});

test("subtract", () => {
    expect(calc(4,'-',2)).toBe(2);
});

test("multiply", () => {
    expect(calc(2,'*',3)).toBe(6);
});

test("divide", () => {
    expect(calc(10,'/',2)).toBe(5);
});