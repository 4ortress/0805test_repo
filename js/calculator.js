const inputValue = document.getElementById('result-input');
let btns = document.getElementsByClassName('btn');

// 연산을 위한 변수 선언
let num1 = 0;
let num2 = 0;
let num3 = 0;
let result = 0;

for(let i=0; i<btns.length; i++){

    // 버튼을 눌렀을 때 동작
    btns[i].addEventListener("click", () => {
        // C 버튼을 눌렀을 때 초기화
        if(btns[i].innerHTML == "C") {
            inputValue.value = "";
        }
        else if(btns[i].innerHTML == "+") {
            num1 = Number(inputValue.value);
            inputValue.value += ' + ';
        }
        else if(btns[i].innerHTML == "-") {
            num1 = Number(inputValue.value);
            inputValue.value += ' - ';
        }
        else if(btns[i].innerHTML == "/") {
            num1 = Number(inputValue.value);
            inputValue.value += ' / ';
        } 
        else if(btns[i].innerHTML == "*") {
            num1 = Number(inputValue.value);
            inputValue.value += ' x ';
        }
        else if(btns[i].innerHTML == "=") {
            num3 = inputValue.value.split(' '); // 공백을 기준으로 나눠서 객체에 저장
            num2 = Number(num3[2]); // 2번째 입력값 저장
            if(num3[1] == '+') { inputValue.value = num1+num2; }
            else if(num3[1] == '-') { inputValue.value = num1-num2; }
            // 나눗셈 - 정수인지 확인 후 정수면 그대로 출력, 이외 소수점 3번째 자리까지 출력
            else if(num3[1] == '/') {
                if(Number.isInteger(num1/num2)) { inputValue.value = num1/num2; }
                else (inputValue.value = (num1/num2).toFixed(3));
            }
            else if(num3[1] == 'x') { inputValue.value = num1*num2; }
        }
        else{ inputValue.value += btns[i].innerHTML; }
    })

}
