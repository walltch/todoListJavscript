const inputElement = document.querySelector('.form-control');  // Get the input element
console.log(inputElement.value);  // Log the current value of the input element

inputElement.addEventListener('input', () => {  // Add event listener for 'change' event
    console.log(inputElement.value);  // Log the new value when the input changes
});
