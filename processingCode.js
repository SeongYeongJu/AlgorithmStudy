// 프로그래머스 '코드 처리하기' 문제

// 나의 풀이)

function solution(code) {
    let answer = "";
    let mode = 0;
    let codeArr = [...code]; // 배열 메서드를 쓰기 위해 전개

    codeArr.forEach((item, idx) => {
        if (mode === 0) {
            if (item !== "1" && idx % 2 === 0) {
                answer += item;
                return;
            }

            if (item === "1") {
                mode = 1;
                return;
            }
        }

        if (mode === 1) {
            if (item !== "1" && idx % 2 !== 0) {
                answer += item;
                return;
            }

            if (item === "1") {
                mode = 0;
                return;
            }
        }
    });

    if (answer === "") return "EMPTY";

    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (9.07ms, 40.2MB)
// 테스트 2 〉	통과 (8.81ms, 39.6MB)
// 테스트 3 〉	통과 (1.68ms, 37.1MB)
// 테스트 4 〉	통과 (1.23ms, 37.1MB)
// 테스트 5 〉	통과 (2.83ms, 37.5MB)
// 테스트 6 〉	통과 (3.28ms, 36.6MB)
// 테스트 7 〉	통과 (2.78ms, 36.3MB)
// 테스트 8 〉	통과 (8.31ms, 38.3MB)
// 테스트 9 〉	통과 (3.66ms, 36.7MB)
// 테스트 10 〉	통과 (11.96ms, 38.4MB)
// 테스트 11 〉	통과 (5.20ms, 38.5MB)
// 테스트 12 〉	통과 (0.15ms, 33.6MB)
// 테스트 13 〉	통과 (0.07ms, 33.5MB)

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
