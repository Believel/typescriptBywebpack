// 泛型：使返回值的类型与传入参数的类型是相同的
// 这里的类型变量，它是一种特殊的变量，只用于表示类型而不是值
function indetity<T>(arg:T):T {
    return arg
}

// 两种方法使用
// let output = indetity<string>('myString')
// let output = indetity('myStrig')

function reverse<T>(items:T[]):T[] {
    const toreturn = [];
    for(let i = items.length-1; i>=0;i--){
        toreturn.push(items[i])
    }
    return toreturn
}
const sample = [1,2,3]
const reversed = reverse(sample)
console.log(reversed)
reversed[1] = 4