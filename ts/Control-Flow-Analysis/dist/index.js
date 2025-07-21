"use strict";
function getResponse() {
    const rand = Math.floor(Math.random() * 3); // 1 2 3
    if (rand === 0)
        return { status: 200, data: { message: "OK" } };
    if (rand === 1)
        return { status: 301, to: "https://google.com" };
    return { status: 400, error: new Error("Bad Request") };
}
const response = getResponse();
switch (response.status) {
    case 200:
        console.log("Data", response.data);
        break;
    case 301:
        console.log("Redirected to:", response.to);
        break;
    case 400:
        console.log("Error:", response.error.message);
        break;
}
