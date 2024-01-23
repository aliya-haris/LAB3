function calculateBMI() {
    // Get the values from the input fields
    var age = document.getElementById("ageInput").value;
    var weight = document.getElementById("weightInput").value;
    var height = document.getElementById("heightInput").value;

    // Validate if the inputs are not empty
    if (age.trim() === "" || weight.trim() === "" || height.trim() === "") {
        alert("Please enter all values.");
        return;
    }

    // Convert height to meters
    var heightInMeters = parseFloat(height) / 100; // assuming height is given in centimeters

    // Calculate BMI
    var bmi = parseFloat(weight) / (heightInMeters * heightInMeters);

    // Display the result
    document.getElementById("result").innerHTML = bmi.toFixed(2);


    // Update the scale marker and category based on BMI
    updateScale(bmi);
}

function updateScale(bmi) {
    var marker = document.getElementById("marker");
    var underweightCategory = document.getElementById("underweight");
    var normalCategory = document.getElementById("normal");
    var overweightCategory = document.getElementById("overweight");
    var suggestions = document.getElementById("suggestions");

    if (bmi < 18.5) {
        marker.style.left = "0%";
        marker.style.backgroundColor = "orange";
        underweightCategory.style.color = "black";
        underweightCategory.style.fontSize = "20px";
        underweightCategory.style.fontStyle = "italic";
        normalCategory.style.color = "#555";
        overweightCategory.style.color = "#555";
        document.getElementById("result").innerText += "\nTime to take charge!";
        suggestions.innerText = "Consider consulting a nutritionist for a healthy weight gain plan.";
    } else if (bmi >= 18.5 && bmi < 25) {
        marker.style.left = "50%";
        marker.style.backgroundColor = "green";
        underweightCategory.style.color = "#555";
        normalCategory.style.color = "black";
        normalCategory.style.fontSize = "20px";
        normalCategory.style.fontStyle = "italic";
        overweightCategory.style.color = "#555";
        document.getElementById("result").innerText += "\nGreat shape!";
        suggestions.innerText = "Maintain a balanced diet and regular exercise to remain healthy.";
    } else {
        marker.style.left = "100%";
        marker.style.backgroundColor = "red";
        underweightCategory.style.color = "#555";
        normalCategory.style.color = "#555";
        overweightCategory.style.color = "black";
        overweightCategory.style.fontSize = "20px";
        overweightCategory.style.fontStyle = "italic";
        document.getElementById("result").innerText += "\nTime to take charge!";
        suggestions.innerText = "Consider consulting a healthcare professional for weight management advice.";
    }
}