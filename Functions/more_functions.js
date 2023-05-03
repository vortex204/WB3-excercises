function displayMailingLabel(name, adress, city, state , zip) {
    console.log(`
    ${ name }
    ${ adress }
    ${ city }
    ${ state }
    ${ zip }
    `)
}

displayMailingLabel("Jeffrey", "123 Somewhere ST", "NY", "NY", "10457")
displayMailingLabel("Ann", "563 Anywhere ST", "SA", "TX", "64743")

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(`
    ${ num1 } +
    ${ num2 } =
    ${ sum }
    `)
}

addNumbers(5,10)
addNumbers(25,15)

function displayReceipt(totalDue, amountPaid) {
    let changeDue = amountPaid - totalDue;
    if (changeDue >= 0) {
    console.log(` Total Due: $${totalDue.toFixed(2)}`);
    console.log(` Amount Paid: $${amountPaid.toFixed(2)}`);
    console.log(` Change Due: $${changeDue.toFixed(2)}`);
    } else{
        let amountDue = totalDue = amountPaid;
        console.log(` Amount Due; $${amountDue.toFixed(2)}`);
    }
}

displayReceipt(25.00, 50.00)
displayReceipt(30.00, 20.00)
displayReceipt(10.50, 10.50)