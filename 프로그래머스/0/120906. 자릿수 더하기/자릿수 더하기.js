function solution(n) {
    var arr = String(n).split("");
    var answer = 0;
    for(let i of arr){
        answer += parseInt(i)
    }
    return answer;
}