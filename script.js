function convertToPercentage() {
    const gpaInput = document.getElementById('gpaInput').value;
    const gpa = parseFloat(gpaInput);

    if (isNaN(gpa) || gpa < 0 || gpa > 4) {
        alert('Please enter a valid GPA between 0 and 4');
        return;
    }

    const percentage = (gpa / 4) * 100;
    document.getElementById('percentageResult').innerText = `Percentage: ${percentage.toFixed(2)}%`;
}

function convertToGPA() {
    const percentageInput = document.getElementById('percentageInput').value;
    const percentage = parseFloat(percentageInput);

    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        alert('Please enter a valid percentage between 0 and 100');
        return;
    }

    const gpa = (percentage / 100) * 4;
    document.getElementById('gpaResult').innerText = `GPA: ${gpa.toFixed(2)}`;
}
