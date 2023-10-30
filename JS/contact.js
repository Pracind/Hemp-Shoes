let buttonClicked = false; // Define and initialize buttonClicked

function updateInterestedHeading() {
    const counterValue = localStorage.getItem('interestCount') || 0;
    const interestedHeading = document.getElementById("interested-heading");
    const interestCount = document.getElementById("interest-count");

    interestCount.textContent = counterValue;
    interestedHeading.textContent = `Interested? So are ${counterValue} more`;
}

function onButtonClick() {
    console.log("Button clicked"); // Add this line for debugging
    if (!buttonClicked) {
        buttonClicked = true;
        let counterValue = parseInt(localStorage.getItem('interestCount')) || 0;
        counterValue++;
        localStorage.setItem('interestCount', counterValue);
        updateInterestedHeading(); // Call the function to update the heading
    }
}


updateInterestedHeading();
