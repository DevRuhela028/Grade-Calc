const creditValues = [];
const gradeValues = [];
let flag = false;
function updateValues() {
    creditValues.length = 0;
    gradeValues.length = 0;
    const creditInputs = document.querySelectorAll('.grid-item2 input');
    const gradeInputs = document.querySelectorAll('.grid-item input');
    creditInputs.forEach((el) => {
        creditValues.push(Number(el.value));
    });
    gradeInputs.forEach((el) => {
        gradeValues.push(Number(el.value));
    });
}

function handleClick() {
    updateValues();
    if (flag) return;
    const totalCredits = creditValues.reduce((total, value) => total + value, 0);
    const totalWeightedGradePoints = gradeValues.reduce((total, grade, index) => {
        return total + grade * creditValues[index];
    }, 0);
    const cgpa = totalWeightedGradePoints / totalCredits;
    const result = cgpa < 4 ? 'FAIL' : 'PASS';
    let letterGrade;
    if (cgpa < 5) letterGrade = 'F';
    else if (cgpa < 6) letterGrade = 'D';
    else if (cgpa < 7) letterGrade = 'C';
    else if (cgpa < 8) letterGrade = 'B';
    else if (cgpa < 9) letterGrade = 'B+';
    else if (cgpa >= 9 && cgpa < 10) letterGrade = 'A';
    else if (cgpa === 10) letterGrade = 'A+';
    const resultContainer = document.getElementById('dis');
    const resultParagraph = resultContainer.querySelector('p');

    if (resultParagraph) {
        resultParagraph.innerText = `Your Final CGPA is: ${cgpa.toFixed(2)}, Grade: ${letterGrade}, Result: ${result}`;
    } else {
        const newResultParagraph = document.createElement('p');
        newResultParagraph.innerText = `Your Final CGPA is: ${cgpa.toFixed(2)}, Grade: ${letterGrade}, Result: ${result}`;
        
        resultContainer.appendChild(newResultParagraph);
    }
    resultContainer.style.borderRadius = '10px';
    resultContainer.style.height = 'fit-content';
    resultContainer.style.width = 'fit-content';
    resultContainer.style.padding = '15px';
    resultContainer.style.margin = '30px';
    resultContainer.style.display = 'flex';
    resultContainer.style.flexDirection = 'column';
    resultContainer.style.justifyContent = 'center';
    resultContainer.style.alignItems = 'center';
    resultContainer.style.boxShadow = '0.1rem 0.1rem 0.8rem rgba(0, 0, 0, 0.6)';
    resultContainer.style.border = 'none';
    flag = true;
}


document.querySelectorAll('.grid-item2 input, .grid-item input').forEach((input) => {
    input.addEventListener('input', () => {
        flag = false;
    });
});
