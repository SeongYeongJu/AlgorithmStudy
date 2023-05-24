// 백준 '달팽이는 올라가고 싶다' 문제

// -----문제 입력 세팅------ //
const fs = require("fs");
let input = fs.readFileSync("./input-snail.txt").toString().split(" ");

let a = +input[0]; // 낮에 달팽이가 올라가는 거리 a
let b = +input[1]; // 밤에 달팽이가 내려오는 거리 b
let v = +input[2]; // 달팽이가 이동해야할 목표 거리 v
// ------------------------- //

// 나의 풀이)

function solution(go, comeBack, total) {
    let answer = 0;

    // 처음부터 차근차근 올라가는 것은 total의 입력 값이 크면 클수록 많은 시간이 걸린다.
    // 따라서 반대로 내려오는 구조가 효율적일 수 있다.

    let distancePerDay = +go - +comeBack; // 하루 동안 올라가는 거리 (속력)
    let reachTime = Math.ceil(+total / distancePerDay); // 마지막 지점에 도착하면 미끄러지는 걸 생각하지 않고 그냥 구하는 도달 시간. 올림 처리 해준다.
    let dis = distancePerDay * reachTime; // 위에서 구한 도달 시간과 속력을 곱해서 거리를 구해준다. 이 거리에서부터 뒤로 돌아간다.

    while (true) {
        // 전체 이동해야할 거리와 dis의 하루 전, 즉 미끄러지기 전의 거리를 비교한다.
        // dis + comeBack이 total보다 크거나 작아야 반복문을 종료하는 트리거가 된다.
        // 조건이 참이면 dis를 하루 전으로 돌리는 작업을 해주고 continue.
        if (total < dis + comeBack) {
            dis = dis + comeBack;
            dis = dis - go;
            continue;
        }

        if (total == dis + comeBack) {
            answer = dis / distancePerDay;
            break;
        }

        if (total > dis + comeBack) {
            answer = dis / distancePerDay + 1;
            break;
        }
    }

    console.log(answer);

    return answer;
}

// 실행
solution(a, b, v);

// 결과 - 정답
// 메모리 - 9580KB
// 시간 - 176ms
// 코드 길이 - 807B
