const output = document.querySelector('input[name="output"]');
const buttons = document.querySelectorAll('.calculator .keys button');
// .calculator .keys 안에 있는 <button>들을 전부 선택 → 배열 비슷한 NodeList 로 반환

buttons.forEach(btn =>{ //button 이벤트 리스너 달아서 계산 처리하기
    btn.addEventListener('click', () => {
        const value = btn.textContent; //버튼안의 텍스트 가져오기

        if(value ==='C'){
            output.value = '';
        } else if (value ==='⌫'){
            output.value = output.value.slice(0, -1);
        } else if (value === '='){
            try{
                let expression = output.value.replace(/\^/g, "**");
                // 거듭제곱을 사용자는 ^이 편하지만, 자바스립트는 거듭 제곱 연산자가 **이기 때문에 치환, 
                // '/ /' -> 정규식을 뜻함, \^ -> '^' 문자 자체를 뜻함, g -> 모든 위치에서 찾는걸 뜻함
                
            output.value = Function('return (' + expression + ')')();
      
            } catch {
                output.value = "Error";
            }
        } else {output.value += value;}
    })
});