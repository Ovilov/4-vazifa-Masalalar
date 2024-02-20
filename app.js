/* while */

// let a = Number(prompt("Birinchi sonni kiriting:"))
// let b = Number(prompt("Ikkinchi sonni kiriting:"))

// while(a > b) {
//     a=a-b
// }
// console.log(a)

///////////////////////////////////////////////////

// let a = Number(prompt("Birinchi sonni kiriting:"));
// let b = Number(prompt("Ikkinchi sonni kiriting:"));
// let counter = 0;

// while(a > b) {
//     a=a-b;
//     counter++;
// }
// console.log(counter)

////////////////////////////////////////////////////

// let n = Number(prompt("Birinchi sonni kiriting:"));
// let k = Number(prompt("Ikkinchi sonni kiriting:"));
// let counter = 0;

// while(n > k) {
//     n=n-k;
//     counter++;
// }
// console.log(counter)//butun
// console.log(n)//qoldiq

///////////////////////////////////////////////////

// let n = Number(prompt("Sonni kiriting:"));
// let i = 1;

// while (n > i) {
//   i = i * 3;
// }

// if (n == i) {
//   console.log("Uchning darajasi !");
// } else {
//   console.log("Uchning darajasi emas !");
// }

///////////////////////////////////////////////////

// let n = Number(prompt("Sonni kiriting:"));
// let i = 1;
// let k = 0;

// while (n > i) {
//   i = i * 2;
//   k++;
// }

// if (n == i) {
//   console.log("Ikkining ",k," - darajasi");
// } else {
//   console.log("Ikkining darajasi emas !");
// }

///////////////////////////////////////////////////

// let n = Number(prompt("Natural son kiriting:"));
// let counter = 1;
// let i = 1;
// let s = 0

// if (n % 2 == 0) {
//   while (n > i) {
//     counter = counter * n;
//     n = n - 2;
//   }
// } else {
//   while (n >= i) {
//     counter = counter * n;
//     n = n - 2;
//   }
// }

// console.log(counter);

////////////////////////////////////////////////////

// let n = Number(prompt("Natural son kiriting:"));
// let k = 1;

// while(n > [k**2]){
//     k++;
// }

// console.log(k)

////////////////////////////////////////////////////

// let n = Number(prompt("Natural son kiriting:"));
// let k = 1;
// let i = 0;

// while(n >= [k**2]){
//     k++;
//     i++;
// }

// console.log(i)

////////////////////////////////////////////////////

// let n = Number(prompt("Natural son kiriting:"));
// let k = 1;

// while(n > [3**k]){
//     k++;
// }

// console.log(k)

///////////////////////////////////////////////////

// let n = Number(prompt("Natural son kiriting:"));
// let k = 1;
// let i = 0;

// while(n >= [3**k]){
//     k++;
//     i++;
// }

// console.log(i)

///////////////////////////////////////////////////

/*FOR*/

///////////////////////////////////////////////////

// let n = Number(prompt("Natural son kiriting:"));
// let k = Number(prompt("Ixtiyoriy son kiriting:"));
// let i = 0;

// for (n > 0; i < n; i++) {
//   console.log(k);
// }

//////////////////////////////////////////////////

// let a = Number(prompt("Birinchi sonni kiriting:"));
// let b = Number(prompt("Ikkinchi sonni kiriting:"));
// i = a;
// let k = 0;

// for (a < b; i <= b; i++) {
//   console.log(i);
//   k++;
// }
// console.log(k)

//////////////////////////////////////////////////

// let a = Number(prompt("Birinchi sonni kiriting:"));
// let b = Number(prompt("Ikkinchi sonni kiriting:"));
// i = b-1;
// let k = 0;

// for (a < b; i > a; i--) {
//   console.log(i);
//   k++;
// }
// console.log(k)

////////////////////////////////////////////////////

// let narx = Number(prompt("Bir kg ning narxini kiriting:"))
// let k = 10;

// for (let i = 1 ; i <= k ; i++){
//   console.log(i*narx)
// }

///////////////////////////////////////////////////

// let narx = Number(prompt("Bir kg ning narxini kiriting:"))
// let k = 10;

// for (let i = 1 ; i <= k ; i++){
//   console.log((i*narx)/10)
// }

///////////////////////////////////////////////////

let narx = Number(prompt("Bir kg ning narxini kiriting:"));
let k = 10;

for (let i = 1; i <= k; i++) {
  console.log((i * narx) / 10);
};

/////////////////////////////////////////////////

// let narx = Number(prompt("Bir kg ning narxini kiriting:"));
// let k = 10;

// for (let i = 1; i <= k; i++) {
//   if (i % 2 == 0){
//     console.log((i * narx + narx) / 10);
//   }
// };
