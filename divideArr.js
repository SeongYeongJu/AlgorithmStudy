// 프로그래머스 나누어 떨어지는 숫자 배열 문제

// 나의 풀이)
function solution(arr, divisor) {
  let answer = [];

  // 파라미터로 받은 arr의 원소 중 divisor로 나누어 떨어지는 숫자만 담은 배열
  let filteredArr = arr.filter((element) => element % divisor === 0);

  // filter를 통해 거른 배열을 오름차순으로 정렬한다
  filteredArr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  // filter한 배열의 길이가 0인지 아닌지에 따라 도출하는 result 값을 다르게 나타낸다.
  if (filteredArr.length !== 0) {
    answer = [...filteredArr];
  } else {
    answer.push(-1);
  }

  return answer;
}

// 프로그래머스 좋아요 많은 풀이)

function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);

  // 삼항연산자 사용, sort 로직도 간결하게!
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
