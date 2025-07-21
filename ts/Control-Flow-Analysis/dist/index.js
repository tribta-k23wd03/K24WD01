"use strict";
/**
 * ==============================
 * LESSON: Assertion function
 * ==============================
 * assertion = khẳng định kiểu dữ liệu của 1 variable
 * có thể throw error!
 */
class SuccessResponse {
    constructor(data) {
        this.data = data;
    }
}
class ErrorResponse {
    constructor(error) {
        this.error = error;
    }
}
function getResponse() {
    if (Math.random() > 0.5)
        return new SuccessResponse({ data: "OK" });
    return new ErrorResponse("Something went wrong");
}
function assertResponse(object) {
    if (object instanceof ErrorResponse) {
        throw new Error("FAIL!!!");
    }
}
const res = getResponse();
assertResponse(res); // throw error in case < 50%
console.log("Data:", res.data); // response
