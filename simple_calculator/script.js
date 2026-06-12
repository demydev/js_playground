const num1Input = document.querySelector('#number_one');
const num2Input = document.querySelector('#number_two');
const resultInput = document.querySelector('#result');
const messageField = document.querySelector('#message_field');
const cleanBtn = document.querySelector('#clean');

function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (num1 == "" && num2 == "") {
        resultInput.value = "";
        messageField.textContent = "";
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        messageField.textContent = "Please enter valid numbers";
        resultInput.value = "";
        return;
    }

    messageField.textContent = "";
    resultInput.value = num1 + num2;
}

cleanBtn.addEventListener('click', () => {
    num1Input.value = "";
    num2Input.value = "";
    resultInput.value = "";
    messageField.textContent = "";
});

num1Input.addEventListener('input', calculate);
num2Input.addEventListener('input', calculate);

