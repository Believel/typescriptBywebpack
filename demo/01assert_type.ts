// 类型断言：用来手动指定一个值的类型
// 语法
// 1. <类型>值
// 2. 值 as 类型
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
import * as $ from "jquery";
$("#app").css({
    width: "100px",
    height: "200px",
    border: "1px solid red"
});
