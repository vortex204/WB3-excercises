function getSocSecTax(grossPay) {
const socSecTax = grossPay * 0.062
return socSecTax
}

let grossPay = 5000;
socSecTax = getSocSecTax(grossPay);
console.log(`Social Security tax on $${grossPay} is $${socSecTax.toFixed(2)}`);

function getMedicareTax(grosspay) {
const MedicareTax = grossPay * 0.0145;
return MedicareTax
}

let grosspay = 50000;
let medicareTax = getMedicareTax(grosspay);
console.log(`Medicare tax on $${grosspay} is $${medicareTax.toFixed(2)}`);

