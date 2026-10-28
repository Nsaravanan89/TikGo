document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pnrForm');
    const pnrInput = document.getElementById('pnrNumber');

    pnrInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const pnr = pnrInput.value.trim();
        if (pnr.length === 10) {
            alert('Checking PNR Status for: ' + pnr);
        } else {
            alert('Please enter a valid 10-digit PNR number.');
        }
    });
});
