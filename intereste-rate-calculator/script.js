function calculateInterest(principal, rate, years) {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(years);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p < 0 || r < 0 || t < 0) {
        return 0;
    }

    const interest = (p * r * t) / 100;
    return Number(interest.toFixed(2));
}

// Browser UI logic
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const calculateBtn = document.getElementById('calculate-btn');
        const form = document.getElementById('calculator-form');
        const resultDiv = document.getElementById('result');

        function updateResult() {
            const principalInput = document.getElementById('principal');
            const rateInput = document.getElementById('rate');
            const yearsInput = document.getElementById('years');

            const principal = principalInput ? principalInput.value : '';
            const rate = rateInput ? rateInput.value : '';
            const years = yearsInput ? yearsInput.value : '';

            if (!principal || !rate || !years || Number(principal) <= 0 || Number(rate) < 0 || Number(years) <= 0) {
                if (resultDiv) {
                    resultDiv.innerHTML = '<div class="result-box error">Please enter valid positive numbers for all fields.</div>';
                }
                return;
            }

            const interest = calculateInterest(principal, rate, years);
            const total = (Number(principal) + interest).toFixed(2);

            if (resultDiv) {
                resultDiv.innerHTML = `
                    <div class="result-box success">
                        <h3>Calculation Summary</h3>
                        <div class="result-row">
                            <span>Principal:</span>
                            <strong>$${Number(principal).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                        </div>
                        <div class="result-row">
                            <span>Rate:</span>
                            <strong>${rate}%</strong>
                        </div>
                        <div class="result-row">
                            <span>Time Period:</span>
                            <strong>${years} year(s)</strong>
                        </div>
                        <div class="result-row highlight">
                            <span>Simple Interest:</span>
                            <strong class="interest-value">$${interest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                        </div>
                        <div class="result-row highlight total">
                            <span>Total Amount:</span>
                            <strong class="total-value">$${Number(total).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                        </div>
                    </div>
                `;
            }
        }

        if (calculateBtn) {
            calculateBtn.addEventListener('click', updateResult);
        }
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                updateResult();
            });
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateInterest };
}