document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('statusForm');
    const trainInput = document.getElementById('trainInput');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = trainInput.value.trim();
        if (value) {
            alert('Fetching running status for: ' + value);
        } else {
            alert('Please enter a valid train number or name.');
        }
    });
});
