document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('foodForm');
    const pnrInput = document.getElementById('pnrNumber');

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

        alert('Searching partner restaurants and delivery outlets for PNR: ' + pnr);
    });
});
