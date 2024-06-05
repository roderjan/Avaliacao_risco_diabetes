function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function calculateBMI() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const bmi = weight / (height * height);

    let bmiValue = 0;
    if (bmi < 25) {
        bmiValue = 0;
    } else if (bmi < 30) {
        bmiValue = 1;
    } else {
        bmiValue = 3;
    }

    const radios = document.getElementsByName('bmi');
    radios.forEach((radio) => {
        if (parseInt(radio.value) === bmiValue) {
            radio.checked = true;
        }
    });

    closeModal();
}

function openResultModal() {
    document.getElementById('resultModal').style.display = 'block';
}
function closeResultModal() {
    document.getElementById('resultModal').style.display = 'none';
}

function calculateRisk() {
    let total = 0;
    const form = document.getElementById('findrisc-form');
    const resultContent = document.getElementById("resultContent");

    const questions = [
        'age', 'bmi', 'waist', 'activity', 'vegetables',
        'medication', 'glucose', 'family'
    ];

    questions.forEach(question => {
        const radios = form.elements[question];
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                total += parseInt(radios[i].value);
                break;
            }
        }
    });

    let riskMessage = '';
    if (total < 7) {
        riskMessage = 'Baixo risco (1 em 100 desenvolverão diabetes).';
    } else if (total < 12) {
        riskMessage = 'Risco ligeiramente elevado (1 em 25 desenvolverão diabetes).';
    } else if (total < 15) {
        riskMessage = 'Risco moderado (1 em 6 desenvolverão diabetes).';
    } else if (total < 20) {
        riskMessage = 'Risco alto (1 em 3 desenvolverão diabetes).';
    } else {
        riskMessage = 'Risco muito alto (1 em 2 desenvolverão diabetes).';
    }
    resultContent.innerHTML = `<strong>${riskMessage}</strong> <br><br> Score dos resultados: ${total}.`;
    openResultModal();
}
