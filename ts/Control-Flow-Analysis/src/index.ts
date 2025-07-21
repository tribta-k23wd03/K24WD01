/**
 * ==============================
 * LESSON: Assignment
 * ==============================
 */
// narrowing type thu hẹp kiểu dữ liệu khai báo
const data1 = { name: "Potter" };
// typeof data1 = obj
// typeof data1.name = "string"
const data2 = { myName: "Voldermon" } as const;
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
  constructor(public data: any) {}
}
class ErrorResponse {
  constructor(public readonly errorCode: number, public message: string) {}
}

function getResponse(): SuccessResponse | ErrorResponse {
  if (Math.random() > 0.5) return new SuccessResponse({ data: "OK" });
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
} else {
  // res.errorCode = 200 // nên khóa lại scopr của property.
  console.log("Error", (res as ErrorResponse).errorCode);
}

/**
 * ==============================
 * LESSON: Re-assignment
 * ==============================
 */
let value: string | number;

value = Math.random() > 0.5 ? "Potter" : 18;

typeof value === "string" ? value.toUpperCase() : value.toFixed(2);
