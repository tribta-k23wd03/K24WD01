"use strict";
/**
 * ==============================
 * LESSON: Type Guards
 * ==============================
 * Cũng là một function, nó trả về kết quả để xác
 * định kiểu của Object.
 */
class APIErrorResponse {
    constructor(errorCode, message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}
class APISuccessResponse {
    constructor(data) {
        this.data = data;
    }
}
function getResponse() {
    if (Math.random() > 0.5) {
        return new APISuccessResponse({ success: "OK" });
    }
    return new APIErrorResponse(404, "Not Found");
}
function isErrorResponse(obj) {
    return obj instanceof APIErrorResponse;
}
const res = getResponse(); // { success: "OK" } | 404, "Not Found"
if (isErrorResponse(res)) {
    console.error("Error Code:", res.errorCode, "Message:", res.message);
}
else {
    console.log("Data:", res.data);
}
