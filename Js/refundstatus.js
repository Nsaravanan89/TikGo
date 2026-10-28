document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('refundForm');
    const refundInput = document.getElementById('refundInput');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = refundInput.value.trim();

        if (value.length > 0) {
            alert('Verifying refund status for ID: ' + value);
        } else {
            alert('Please enter a valid PNR or Transaction ID.');
        }
    });
});
