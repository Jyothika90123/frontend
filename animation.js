function startProcess() {
    // Array of steps with their duration (in seconds)
    const steps = [
        { id: 'step1', duration: 3 },
        { id: 'step2', duration: 4 },
        { id: 'step1', duration: 3 }, // Return to the first test tube after the second
        { id: 'step3', duration: 5 },
        { id: 'step4', duration: 4 },
        { id: 'step5', duration: 3 },
        { id: 'step6', duration: 2 }
    ];

    // Initial color for all test tubes
    const initialColor = 'red';
    // Active color for the tube being processed
    const activeColor = 'green';

    // Set all test tubes to the initial color at the start
    document.querySelectorAll('.test-tube').forEach(tube => {
        tube.style.backgroundColor = initialColor;
    });

    // Function to animate each tube according to the timeline
    steps.forEach((step, index) => {
        setTimeout(() => {
            // Reset all tubes to the initial color before setting the active one
            document.querySelectorAll('.test-tube').forEach(tube => {
                tube.style.backgroundColor = initialColor;
            });

            // Set the active tube to the active color
            const tube = document.getElementById(step.id);
            tube.style.transition = `background-color ${step.duration}s`;
            tube.style.backgroundColor = activeColor;
        }, calculateDelay(steps, index));
    });
}

// Helper function to calculate the cumulative delay for each step
function calculateDelay(steps, currentIndex) {
    let delay = 0;
    for (let i = 0; i < currentIndex; i++) {
        delay += steps[i].duration * 1000; // Convert to milliseconds
    }
    return delay;
}



