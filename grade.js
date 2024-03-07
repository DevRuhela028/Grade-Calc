const credit = document.querySelectorAll('.grid-item2');
const credit_value = [];
const grade = document.querySelectorAll('.grid-item');
const grade_value = [];
let flag = false;
console.log(grade_value)
function handleClick(){
    if(flag == true) return
    credit.forEach(el => {
    credit_value.push(el.firstChild.value);
    })
    console.log(credit_value)
    grade.forEach(el => {
    grade_value.push(el.firstChild.value);
    })
    console.log(grade_value)
    let total = 0;
    for(let i = 0 ; i < credit_value.length ; i++){
        total += Number(credit_value[i]);
    }
    console.log(total)  
    
    let got = 0;
    for(let i = 0 ; i < credit_value.length ; i++){
        got += credit_value[i]*grade_value[i];
    }
    console.log(got)  
    console.log(got/total)
    var a = got/total
    var ch
    if(got/total < 4){
        ch = "FAIL"
    }
    else ch = "PASS"
    var gr
    if(a < 5) gr = "F"
    else if(a < 6) gr = "D"
    else if(a < 7) gr = "C"
    else if(a < 8) gr = "B"
    else if(a < 9) gr = "B+"
    else if(a >= 9 && a < 10) gr = "A"
    else if(a == 10) gr = "A+"
    const ele = document.getElementById('dis');
    const ele1 = document.createElement('p');
    ele1.innerText = "Your Final CGPA is : " + got/total + " , " + gr
    ele.appendChild(ele1)
    ele.style.border = "1px solid turquoise"
    ele.style.borderRadius = "10px"
    ele.style.height = "50px"
    ele.style.width = "500px"
    ele.style.padding = "15px"
    ele.style.margin = "30px"
    ele.style.display = "flex"
    ele.style.justifyContent = "center"
    ele.style.alignItems = "center"
    ele.style.boxShadow = "black 0.4rem 0.5rem 0.5rem 0.25rem"
    flag = true;
}
