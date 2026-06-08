// 1. Grab the HTML elements by their IDs
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');

// 2. Set our starting number variable
let currentCount = 0;
 
// 3. Tell the button to listen for a click
incrementBtn.addEventListener('click', function() {
    // Add 1 to the current number
    currentCount = currentCount + 1;
    
    // Update the text inside the HTML display element
    counterDisplay.innerText = currentCount;
});

// 4. Grab the cancel button and listen for clicks
const cancelCounterBtn = document.getElementById('cancel-counter');

cancelCounterBtn.addEventListener('click', function() {
    currentCount = 0;
    counterDisplay.innerText = currentCount;
});
