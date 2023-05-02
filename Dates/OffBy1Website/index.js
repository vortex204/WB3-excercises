const submitBtn = document.getElementById(' submit-btn');
const dateInput = document.getElementById(' dare-input');
const result = document.getElementById(' result');

submitBtn.addEventListener('click',() => {
const inputValue = dateInput.value;
const date = new date(inputValue);
result.textContent = `You entered: ${date.toString()}`;
});