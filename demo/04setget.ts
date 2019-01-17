class Job{
    private _name:string
    constructor(name:string) {
        this._name = name
    }
    get name():string {
        return this._name
    }
    set name(newvalue:string) {
        if(newvalue.length >8) {
            throw new Error('名字最少8位')
        } else {
            this._name = newvalue
        }
    }
}
let j:Job = new Job('职员')
j.name = 'zhangsan'
console.log(j.name)