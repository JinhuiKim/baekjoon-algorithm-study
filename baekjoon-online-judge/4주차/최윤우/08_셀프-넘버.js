// 셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 
// 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자.
// 예를 들어, d(75) = 75+7+5 = 87이다
// n을 d(n)의 생성자라고 한다. 
// 생성자가 없는 숫자를 셀프 넘버라고 한다. 
// 100보다 작은 셀프 넘버는 총 13개가 있다.

let sum = 0;
for (let i = 1; i <= 10000; i++) {
    i[0]
}
// 못 풀겠다 레퍼런스

const notSelfNumbers = new Set();

for (let num = 1; num <= 10000; num++) {
  notSelfNumbers.add(
    num +
      num
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0)
  );
}

for (let num = 1; num <= 10000; num++) {
  if (!notSelfNumbers.has(num)) {
    console.log(num);
  }
}