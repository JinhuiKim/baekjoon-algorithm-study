// 한수는 쉽게 풀어보면 숫자의 자릿수에 존재하는 수를 하나하나 나눠서
// 그 수의 간격이 일정한 지를 판단하는 것
// ex) 123 -> 1,2,3 (1씩 증가 = 등차수열)
// ex) 101 -> 1,0,1 (1감소후 1증가 != 등차수열)

// 실패 ㅠㅠㅠ
let input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input);
let count = 0;
    if (num === 1) {
        count = 1;
    }
for(let i=1; i <= num - 1; i++) {
    if(i < 100) {
        count = i;
    }
    let arr = String(i).split('')
    let newArr = arr.map(Number)
    for (let j = newArr.length ; j > 0; j--) {
       if (newArr[j]-newArr[j-1] === newArr[j-1]-newArr[j-2]) {
           count++;
       }
    }
}
console.log(count);

// 레퍼런스

const fs = require("fs");
const number = Number(fs.readFileSync("/dev/stdin"));

const hanNumbers = new Set();

for (let num = 1; num <= number; num++) {
  if (num < 100) {
    hanNumbers.add(num);
  } else {
    const str = num + "";
    const differ1 = Number(str[2]) - Number(str[1]);
    const differ2 = Number(str[1]) - Number(str[0]);

    if (differ1 === differ2) {
      hanNumbers.add(num);
    }
  }
}

console.log(hanNumbers.size);