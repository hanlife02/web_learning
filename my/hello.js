/*
 * @Author: Ethan && ethan@hanlife02.com
 * @Date: 2025-04-04 13:39:48
 * @LastEditors: Ethan && ethan@hanlife02.com
 * @LastEditTime: 2025-04-04 14:06:15
 * @FilePath: /code/web/hello.js
 * @Description:
 *
 * Copyright (c) 2025 by Ethan, All Rights Reserved.
 */

// const arrCtoF = (arrC) => {
//     const arrF = [];
//     for(let i = 0;i < arrC.length;i++){
//         arrF.push(arrF[i] * 9/5 + 32);
//     }
//     return arrF;
// };

// const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const newarray = array.map((item) => {
//   return item / 10;
// });

// console.log(newarray);

// let value = [3, -6, -2, 5, 0, 4, -1, 2, -3, 1];
// value = value.filter((x) => x > 0);
// console.log(value);

let car1 = {
  name: "car1",
  color: "red",
  year: 2000,
};
let car2 = {
  name: "car2",
  color: "blue",
  year: 2005,
};
let car3 = {
  name: "car3",
  color: "red",
  year: 2010,
};
let myCars = [car1, car2, car3];
let redCars = myCars.filter((car) => car.color === "red");
console.log(redCars);
