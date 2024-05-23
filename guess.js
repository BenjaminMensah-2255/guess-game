let answer = Math.floor(Math.random() * 20) + 1;
let guesses = 0;
let empty2 = null;

// Get references to the input field and submit button
let guessField = document.getElementById("guessField");
let submitButton = document.getElementById("submitId");

// Attach an event listener to the input field to listen for the Enter key press
guessField.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        // Simulate a click on the submit button when Enter key is pressed
        submitButton.click();
    }
});

// Attach an event listener to the submit button
submitButton.onclick = function () {
    let guess = guessField.value;
    guesses += 1;

    if (guess == empty2) {
        alert("Please guess any number");
    } else if (guess == answer) {
        let alertBox = document.createElement("div");
        alertBox.className = "custom-alert correct";
        alertBox.innerText = `Correct ${answer} is the number. It took you ${guesses} guesses. REFRESH TO START AGAIN.`;
        document.body.appendChild(alertBox);
    } else if (guess < answer) {
        let alertBox = document.createElement("div");
        alertBox.className = "custom-alert small";
        alertBox.innerText = "No That's too small, guess again";
        document.body.appendChild(alertBox);
    } else if (guess > answer) {
        let alertBox = document.createElement("div");
        alertBox.className = "custom-alert high";
        alertBox.innerText = "No That's too high, guess again";
        document.body.appendChild(alertBox);
    }

    // Clear the input field after processing
    guessField.value = "";
}
