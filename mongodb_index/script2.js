// const geneateRandomCustomer = require("./script1");
// const BSON = require("bson");

const randomCustomers = [];

for (let i = 0; i < 5_000_000; i++) {
  randomCustomers.push(geneateRandomCustomer());
}

// function getDocumentSize(document) {
//   return BSON.calculateObjectSize(document);
// }

// const size = getDocumentSize(randomCustomers[0]);

// console.log(`1 document: ${size / (1024 * 1024).toFixed(5)} mb`);
// console.log(
//   `Số lượng tối đa trong 1 lần chuyển là: ${Math.floor(4.8e7 / size)}`
// );
// // 48mb