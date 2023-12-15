const form = document.querySelector('form');
const show = document.querySelector('#show');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            show.innerHTML = `You are underweight`;
            show.style.color = "red"; // Set text color to red
        } else if (18.6 <= bmi && bmi <= 24.9) {
            show.innerHTML = `You are in normal range`;
            show.style.color = "green"; // Set text color to green
        } else if (bmi > 24.9) {
            show.innerHTML = `You are overweight`;
            show.style.color = "red"; // Set text color to green
        }
    }
});
