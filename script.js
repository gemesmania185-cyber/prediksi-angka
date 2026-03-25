// script.js

// Function for number prediction
function predictNumber() {
    // Predict a random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}

// Function for dream interpretation
function interpretDream(dreamDescription) {
    const interpretations = {
        'falling': 'This might indicate feelings of loss of control or insecurity.',
        'flying': 'This could suggest freedom and a break from limitations.',
        'running': 'Often represents the need to escape or avoid a situation.',
        'teeth falling out': 'May indicate anxiety about appearance or fear of helplessness.',
        'being chased': 'This often signifies that you are avoiding a situation that needs to be confronted.'
    };

    return interpretations[dreamDescription] || 'Interpretation not available';
}

// Example usage
const randomPrediction = predictNumber();
console.log(`Predicted Number: ${randomPrediction}`);

const dreamInterpretation = interpretDream('falling');
console.log(`Dream Interpretation: ${dreamInterpretation}`);