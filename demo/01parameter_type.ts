let a:number = 12;
let b:boolean = true;
function plus(a:number, b:number):number {
    return a+b
}
// 数组(两种写法)
let arr:number[] = [1,2,3]
let arr4:Array<number> = [1,2,3]
// 联合类型
let c:(number|string) = 'a'
let arr2:(number|string)[] = [1, 2,'p']
// 元组类型
let arr3:[number,boolean] = [1,true]
// 枚举类型
enum Gender{Male, Female};
let gender:Gender = Gender.Male
// void
function hello(name:string):void {
    console.log('你好'+name)
}
hello('zpp')
// undefined,null
let un:undefined = undefined
let nu:null = null
// never 常用于函数
function show1():never {
    let a = 1;
    let b = 12;
    alert(a+b)
    throw new Error('有错')
}
// object
let json:{a:number,b:number} = {a:12,b:4}