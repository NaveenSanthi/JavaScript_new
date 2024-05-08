const list = [1, 2, 3, 4, 5, 6, 7, 8];
//Array Methods
//forEach,Map, filter, findIndex, , reduce,find
let dataa = [];
list.forEach((data) => {
  if (data < 5) {
    dataa.push(data * 2);
  }
  console.log(data);
});
//map
const sums = list.map((data) => {
  if (data < 5) {
    return data * 2;
  }
});
console.log(sums);
console.log("______________________");
//filter
const filteredValue = list.filter((data) => data > 5);
console.log(filteredValue);
//find Index
const indexValue = list.find((data) => data == -4);
console.log(indexValue);
//reduce
const singleValue = list.reduce((data, acc) => {
  return data * acc;
}, 1);
console.log(singleValue);
