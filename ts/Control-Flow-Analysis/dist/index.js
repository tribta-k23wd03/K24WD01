"use strict";
/**
 * ==============================
 * LESSON: Assignment
 * ==============================
 */
// narrowing type thu hẹp kiểu dữ liệu khai báo
const data1 = { name: "Potter" };
// typeof data1 = obj
// typeof data1.name = "string"
const data2 = { myName: "Voldermon" };
// myName.attribute.readonly = true
data1.name = "Potter -> Dumberdore"; // ??? no
console.log(data1.name);
// data2.myName = "Lucky Luke"; // ??? NO
console.log(data2.myName);
/**
 * ==============================
 * LESSON: Tracks through related variables
 * ==============================
 * function tracking data type
 */
class SuccessResponse {
    constructor(data) {
        this.data = data;
    }
}
class ErrorResponse {
    constructor(errorCode, message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}
function getResponse() {
    if (Math.random() > 0.5)
        return new SuccessResponse({ data: "OK" });
    return new ErrorResponse(403, "FORBIDDEN");
}
const res = getResponse();
// function assertResponse(object: any): asserts object is SuccessResponse {
//   if (object instanceof ErrorResponse) {
//     throw new Error("FAIL!!!");
//   }
// }
console.log(res);
const isSuccessResponse = res instanceof SuccessResponse; // true/false
if (isSuccessResponse) {
    console.log("Data", res.data);
}
else {
    res.errorCode = 200;
    console.log("Error", res.errorCode);
}
