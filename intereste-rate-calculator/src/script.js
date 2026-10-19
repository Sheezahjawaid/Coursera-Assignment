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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateInterest };
}