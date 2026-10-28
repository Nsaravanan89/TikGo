document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cancelForm');
    const pnrInput = document.getElementById('pnrNumber');
    const agreeCheckbox = document.getElementById('agreePolicy');

    pnrInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const pnr = pnrInput.value.trim();

        if (pnr.length !== 10) {
            alert('Please enter a valid 10-digit PNR number.');
            return;
        }

        if (!agreeCheckbox.checked) {
            alert('You must agree to the cancellation charges and policies to proceed.');
            return;
        }

        alert('Processing cancellation request for PNR: ' + pnr);
    });
});
