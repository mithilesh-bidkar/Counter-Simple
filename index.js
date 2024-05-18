
function increment () {
    let countElement = document.getElementById("count-value");
    let errorElement = document.getElementById("error-msg");
    let clearButton = document.getElementById("clear-btn");

    let countValue = parseInt(countElement.innerHTML);

    countValue = countValue + 1;

    if(countValue > 0) {
        errorElement.style.display = "none";
        clearButton.style.display = "block";
    }

    countElement.innerHTML = countValue;
}

function decrement () {
    let countElement = document.getElementById("count-value");
    let errorElement = document.getElementById("error-msg");
    let clearButton = document.getElementById("clear-btn");

    let countValue = parseInt(countElement.innerHTML);

    countValue = countValue - 1;

    if(countValue === 0) {
        clearButton.style.display = "none";
    }

    if(countValue < 0) {
        errorElement.style.display = "block";
        return;
    }

    countElement.innerHTML = countValue;
}

function clearValue () {
    let countElement = document.getElementById("count-value");
    let clearButton = document.getElementById("clear-btn");

    countElement.innerHTML = "0";
    clearButton.style.display = "none";
}