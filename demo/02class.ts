class Person {
    // 访问修饰符
    // public 任何人都能修改
    // private 只有类内部能使用
    // protected 只有类和子类能使用
    protected name: string;
    private age: number
    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
    show():void {
        console.log('我是'+this.name+',年龄：'+this.age)
    }
}
// let p:Person = new Person('blue', 10)
// p.show()
// p.name = 'zpp'

class Staff extends Person {
    private job: string
    constructor(name: string, age:number,job:string) {
        super(name,age);
        this.job = job
    }
    public show():void {
        super.show()
        // console.log(this.age)
        // console.log(this.name)
        console.log(`岗位:${this.job}`)
    }
}
let sta:Staff = new Staff('blue' , 18, '职员')
sta.show()


// 另一种访问修饰符使用地方
// class Student {
//     constructor(private stuname:string, private score:number) {

//     }
// }