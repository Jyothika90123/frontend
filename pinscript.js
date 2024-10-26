document.addEventListener("DOMContentLoaded", () => {
    const correctPIN = "1234"; // Set your desired PIN here
    const loginButton = document.getElementById('login-button');
    const clearButton = document.getElementById('clear-button');
    const pinDisplay = document.getElementById('pin-display');
    const messageDiv = document.getElementById('message');
    
    let enteredPIN = "";

    // Event listener for digit buttons
    const digitButtons = document.querySelectorAll('.digit-button');
    digitButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (enteredPIN.length < 4) {
                enteredPIN += button.dataset.value; // Append the clicked digit
                pinDisplay.textContent = enteredPIN.padEnd(4, '*'); // Update display
            }
        });
    });

    // Clear the entered PIN
    clearButton.addEventListener('click', () => {
        enteredPIN = ""; // Reset entered PIN
        pinDisplay.textContent = "****"; // Reset display
        messageDiv.textContent = ""; // Clear any messages
    });

    // Check the entered PIN
    loginButton.addEventListener('click', () => {
        if (enteredPIN === correctPIN) {
            messageDiv.textContent = "PIN entered successfully!";
            messageDiv.style.color = "green";
            // Redirect to the test tube screen
            setTimeout(() => {
                window.location.href = "page3.html"; // Redirect to the test tube page
            }, 1000); // Delay before redirecting
        } else {
            messageDiv.textContent = "Incorrect PIN. Please try again.";
            messageDiv.style.color = "red";
            enteredPIN = ""; // Clear the input
            pinDisplay.textContent = "****"; // Reset display
        }
    });
});


