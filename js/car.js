document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.querySelector('.credit-input input[type="tel"]');

    phoneInput.addEventListener('input', function (e) {
        let value = this.value;
        value = value.replace(/[^0-9]/g, '');
        if (value.length > 0 && !value.startsWith('7')) value = '7' + value;
        if (value.length > 10) value = value.slice(0, 10);
        this.value = '+7' + value.slice(1);
    });
    phoneInput.value = '+7';
});

function updateLoan() {
    const slider = document.getElementById('loan-slider');
    const value = slider.value;
    document.getElementById('loan-amount').textContent = `${value.toLocaleString()} ₽`;
    calculatePayment();
}

function updateTerm() {
    const slider = document.getElementById('term-slider');
    const value = slider.value;
    document.getElementById('loan-term').textContent = `${value} ${value === 1 ? 'год' : 'лет'}`;
    calculatePayment();
}

function calculatePayment() {
    const loanAmount = parseInt(document.getElementById('loan-slider').value);
    const termYears = parseInt(document.getElementById('term-slider').value);
    const termMonths = termYears * 12;
    const interestRate = 0.10;
    const monthlyRate = interestRate / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    document.getElementById('monthly-payment').textContent = `${payment.toFixed(0).toLocaleString()} ₽ / мес.`;
}

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    updateLoan();
    updateTerm();
});