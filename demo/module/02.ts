import { foo } from "./01";

const bar = foo

// 命名空间
namespace Utility {
    export function log(msg) {
        console.log(msg)
    }
    export function error(msg) {
        console.log(msg)
    }
}
Utility.log('Call me')
Utility.error('maybe')

let num:number;
num = null;

// 类型别名
type StrOrNum = string | number;

// 使用类型别名
let sample: StrOrNum;
sample = 123;
sample = '123';

