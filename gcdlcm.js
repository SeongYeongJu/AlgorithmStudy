// 프로그래머스 '최대공약수(gcd)와 최소공배수(lcm) 구하기' 문제

// 나의 풀이)

function solution(n, m) {
  var answer = [];
  let gcd = 0; // 최대공약수
  let lcm = 0; // 최소공배수
  let nDivisorArr = []; // n의 약수를 담는 배열
  let mDivisorArr = []; // m의 약수를 담는 배열
  let nmDivisorArr = []; // n과 m의 공약수를 담는 배열

  // n의 약수를 배열에 담아준다.
  for (let i = 1; i < n + 1; i++) {
    // 정수인지 판별하고 정수라면 배열에 넣어준다.
    if (Number.isInteger(n / i)) {
      nDivisorArr.push(n / i);
    }
  }

  // m의 약수를 배열에 담아준다.
  for (let i = 1; i < m + 1; i++) {
    // 정수인지 판별하고 정수라면 배열에 넣어준다.
    if (Number.isInteger(m / i)) {
      mDivisorArr.push(m / i);
    }
  }

  // n배열과 m배열에서 서로 공통된 수를 찾아 nm배열에 담는다. 이것이 공약수가 되는 것이다.
  for (let i = 0; i < mDivisorArr.length; i++) {
    let nm = nDivisorArr.find((e) => e == mDivisorArr[i]);
    // nm이 undefined일수도 있다.
    if (nm) {
      nmDivisorArr.push(nm);
    }
  }

  // 두 수의 공약수를 모은 nm배열의 첫번째가 제일 큰 수이므로 0번 인덱스가 최대공약수이다.
  gcd = nmDivisorArr[0];
  // 최소공배수는 두 수를 곱한 것에 최대공약수를 나눈 것이다.
  lcm = (n * m) / gcd;
  answer.push(gcd);
  answer.push(lcm);
  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.21ms, 33.6MB)
// 테스트 3 〉	통과 (0.21ms, 33.4MB)
// 테스트 4 〉	통과 (0.36ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.18ms, 33.7MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.09ms, 33.4MB)
// 테스트 9 〉	통과 (0.20ms, 33.4MB)
// 테스트 10 〉	통과 (0.20ms, 33.7MB)
// 테스트 11 〉	통과 (0.56ms, 33.6MB)
// 테스트 12 〉	통과 (0.44ms, 33.5MB)
// 테스트 13 〉	통과 (0.42ms, 33.7MB)
// 테스트 14 〉	통과 (0.47ms, 33.6MB)
// 테스트 15 〉	통과 (0.30ms, 33.5MB)
// 테스트 16 〉	통과 (0.44ms, 33.8MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
