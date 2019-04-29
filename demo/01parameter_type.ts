let a: number = 12;
let b: boolean = true;
function plus(a: number, b: number): number {
    return a + b;
}

// void 表示一个函数没有一个返回值
function hello(name: string): void {
    console.log("你好" + name);
}
hello("zpp");
let unusable: void = undefined;
// undefined,null
let un: undefined = undefined;
let nu: null = null;
// 任意值: 在任意值上访问任何属性和方法是允许的
let myFavoriteNumber: any = 1;
console.log(myFavoriteNumber.myName); // undefined
// never 常用于函数
function show1(): never {
    let a = 1;
    let b = 12;
    alert(a + b);
    throw new Error("有错");
}
//函数中输入参数定义的可选参数必须接在必需参数后面
let mySum: (x: number, y: number) => number = function(
    x: number,
    y: number
): number {
    return x + y;
};
// 函数参数:默认值
function buildName(firstName: string, lastName: string = "cat"): string {
    return `${firstName} ${lastName}`;
}
buildName("zhang");
// 函数——剩余参数(只能是最后一个参数)
function push(array: any[], ...items: any[]): void {
    items.forEach(item => {
        array.push(item);
    });
}
let a1 = [];
push(a1, 1, 2, 3, 4, "f");
// 函数——重载(允许一个函数接受不同数量和类型参数时，做不同的处理)
function myreverse(x: string): string;
function myreverse(x: number): number;
function myreverse(x: string | number): string | number {
    if (typeof x === "number") {
        return Number(
            x
                .toString()
                .split("")
                .reverse()
                .join("")
        );
    } else if (typeof x === "string") {
        return x
            .split("")
            .reverse()
            .join("");
    }
}
console.log(myreverse(123));
console.log(myreverse("hello"));
// object
let json: { a: number; b: number } = { a: 12, b: 4 };
// 对象的类型 - 接口
interface Person1 {
    readonly id: number;
    name: string;
    age: number;
    // 可选属性
    sex?: string;
    // 任意属性
    // 注意：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
    [propName: string]: any;
}
let Tom: Person1 = {
    // 只读的约束存在于第一次给对象赋值的时候
    id: 9087,
    name: "zpp",
    age: 25,
    sex: "female",
    score: 99
};
// 只读属性id只能在创建的时候赋值，在这里修改值是会报错的
// Tom.id = 122;
// 数组(两种写法)
// 1. 类型 + 方括号
let arr: number[] = [1, 2, 3];
// 2. 数组泛型 Array<类型>
let arr4: Array<number> = [1, 2, 3];
// 类数组：有自己的接口定义
function sum() {
    let args: IArguments = arguments;
}
// 联合类型: 使用 | 分隔每个类型。
let c: number | string = "a";
let arr2: (number | string)[] = [1, 2, "p"];
// 元组类型
let arr3: [number, boolean] = [1, true];
// 枚举类型
enum Gender {
    Male,
    Female
}
let gender: Gender = Gender.Male;
