/*
==================================
Array Mastery: Group Odd Evens
==================================

Nama: Prabu Santoso

[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:

"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"

aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!

[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"

input: [1, 1, 1]
output: "ODDS: 1, 1, 1"

input: [2, 8, 10]
output: "EVENS: 2, 8, 10"

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

function groupOddEven(students) {
  // Code here
  let oddArray = [];
  let evenArray = [];
  for(let i=0; i <= students.length-1; i++){
    if (students[i] % 2 === 0){
      evenArray.push(students[i]);
    }else if(students[i] % 2 !== 0){
      oddArray.push(students[i]);
    }
  }
    if(oddArray.length !== 0 && evenArray.length !== 0){
    return " ODDS: "+ oddArray +" EVENS: "+ evenArray;
    }else{
    if(oddArray.length !== 0 && evenArray.length === 0){
    return " ODDS: "+ oddArray;
    }else if(evenArray.length !== 0 && oddArray.length === 0){
    return " EVENS: "+ evenArray;
    }else{
    return " ";
    }
  }
}
// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""