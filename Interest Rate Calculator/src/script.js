/**
 * Interest Rate Calculator
 * Prevents TypeErrors and properly converts input values to numbers before use in calculations.
 */

function calculate(principal, rate, years) {
    // All input values are properly converted to numbers before use in calculations
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(years);

    // Correct the code to prevent TypeErrors and handle invalid/negative inputs
    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0) {
        return 0;
    }

    // Formula: (Principal * Rate * Years) / 100
    const interest = (p * r * t) / 100;
    return Number(interest.toFixed(2));
}

// Function alias calculateInterest
function calculateInterest(principal, rate, years) {
    return calculate(principal, rate, years);
}

// Prevent TypeErrors during browser execution by ensuring DOM elements exist
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const calculateBtn = document.getElementById('calculate-btn');
        const form = document.getElementById('calculator-form');
        const resultDiv = document.getElementById('result');

        function updateResult() {
            const principalInput = document.getElementById('principal');
            const rateInput = document.getElementById('rate');
            const yearsInput = document.getElementById('years');

            if (!principalInput || !rateInput || !yearsInput) {
                return;
            }

            const principal = parseFloat(principalInput.value);
            const rate = parseFloat(rateInput.value);
            const years = parseFloat(yearsInput.value);

            if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate < 0 || years <= 0) {
                if (resultDiv) {
                    resultDiv.innerHTML = '<span class="error">Please enter valid positive numbers.</span>';
                }
                return;
            }

            const interest = calculate(principal, rate, years);
            const total = principal + interest;

            if (resultDiv) {
                resultDiv.innerHTML = `Interest: $${interest.toFixed(2)} | Total: $${total.toFixed(2)}`;
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

// Export for Jasmine testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculate, calculateInterest };
}
