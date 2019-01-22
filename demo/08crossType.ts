// extend是一种常见的模式(交叉类型)
// 在这种模式中，你可以从两个对象中创建一个新对象，新对象会拥有着两个对象所有的功能。
function extend<T,U>(first:T, second:U):T&U {
    const result = <T&U>{}
    for(let id in first){
        (<T>result)[id] = first[id]
    }
    for(let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<U>result)[id] = second[id]
        }
    }
    return result
}
const x = extend({a:'hellp'}, {b:32})
console.log(x)

aaa = 123
console.log(aaa)