// Get elements from the DOM
const countElement = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const saveBtn = document.getElementById('save');
const previousEntriesList = document.getElementById('previous-entries');

// Initial count and previous entries array
let count = 0;
let previousEntries = [];

// Update the count on the UI
function updateCount() {
    countElement.textContent = count;
}

// Update previous entries list
function updatePreviousEntries() {
    previousEntriesList.innerHTML = '';
    previousEntries.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        previousEntriesList.appendChild(li);
    });
}

// Function to save current count
function saveCount() {
    const savedCount = count;
    previousEntries.push(`Saved count: ${savedCount}`);
    updatePreviousEntries();
}

// Event listeners for buttons
increaseBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

saveBtn.addEventListener('click', () => {
    saveCount();
});

// Initial calls to update count and previous entries
updateCount();
updatePreviousEntries();
