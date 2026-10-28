document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('roomForm');
    const pnrInput = document.getElementById('pnrNumber');
    const stationSelect = document.getElementById('stationSelect');
    const durationSelect = document.getElementById('durationSelect');

    pnrInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const pnr = pnrInput.value.trim();
        const station = stationSelect.value;
        const duration = durationSelect.value;

        if (pnr.length !== 10) {
            alert('Please enter a valid 10-digit confirmed PNR number.');
            return;
        }

        alert('Searching rooms at ' + station + ' for ' + duration + ' hours under PNR: ' + pnr);
    });
});
