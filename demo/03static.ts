class Teacher{
    // 修饰符 static 静态成员——无需实例化即可调用
    public static user: string = 'blue'

    constructor(protected name:string, private age:number) {
        
    }
}
console.log(Teacher.user)