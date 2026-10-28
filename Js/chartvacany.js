document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vacancyForm');
    const trainInput = document.getElementById('trainNumber');
    const dateInput = document.getElementById('journeyDate');

    trainInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const train = trainInput.value.trim();
        const date = dateInput.value.trim();

        if (!train) {
            alert('Please enter a valid train number.');
            return;
        }

        if (!date) {
            alert('Please enter your journey date.');
            return;
        }

        alert('Fetching chart status for train: ' + train + ' on date: ' + date);
    });
});
