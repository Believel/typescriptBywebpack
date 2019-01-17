// 抽象类只能作为父级使用，不能直接实例化
// 只提供模板，而不自己实现

abstract class Shape{
    abstract draw(gb):void
    abstract area():number
}
class Rect extends Shape {
    constructor(private width:number,private height:number){
        super()
    }
    draw(gd):void {

    }
    area():number {
        return this.width * this.height
    }
}

let r:Shape;
r = new Rect(400,300)
console.log(r.area())