// 一些接口具有共同的特性：
// 接口是为了定义对象的类型
// 继承
// 实现接口：为了规范所有的子类
interface Shape2 {
    area2(): number;
}
class Rect2 implements Shape2 {
    constructor(private width: number, private height: number) {}
    area2(): number {
        return this.width * this.height;
    }
}

let rr: Shape2 = new Rect2(300, 20);
console.log(rr.area2());

// 一个类只能继承自另一个类，有时候不同类之间有一些共有的特性，这时候就可以把特性提取成接口
