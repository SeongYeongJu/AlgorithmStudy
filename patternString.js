// 프로그래머스 '수박수박수박수박수박수?' 문제

// 나의 풀이)
function solution(n) {
  var answer = "";

  for (let i = 0; i < n; i++) {
    // 첫 순서가 0이므로 홀수 번째에는 '박' 붙여주기
    if (i % 2 !== 0) {
      answer = answer + "박";
    } else {
      // 짝수 번째에는 '수' 붙여주기
      answer = answer + "수";
    }
  }

  return answer;
}

// 다른 사람 풀이)
function otherSolution(n) {
  var answer = "";

  // repeat을 활용 (repeat에 들어가는 파라미터가 정수가 아니라면 소숫점 이하를 버림하여 정수로 변환해준다.)
  // n이 짝수라면 '수박'을 n / 2 번만큼 반복하면 되고, n이 홀수라면 추가적으로 '수'만 덧붙이면 끝!
  var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");

  answer = waterMelon(n);

  return answer;
}
