const submitBtn = document.getElementById('submit-btn');
const dateInput = document.getElementById('date-input');
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const inputValue = dateInput.value;
  const date = new Date(inputValue);
  result.textContent = `You entered: ${date.toString()}`;
});
