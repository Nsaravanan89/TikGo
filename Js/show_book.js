const historicalBookingsDataset = {
    upcoming: [
        {
            trainName: "MS MAQ EXPRESS",
            trainNumber: "16159",
            route: "Tambaram(TBM) ➔ Truchirapalli(TPJ)",
            travelDate: "11 sep 2026",
            bookedDate: "10 sep 2026",
            pnr: "483448384783",
            status: "CANCELLED"
        }
    ],
    completed: [
        {
            trainName: "MS MAQ EXPRESS",
            trainNumber: "16159",
            route: "Tambaram(TBM) ➔ Truchirapalli(TPJ)",
            travelDate: "11 sep 2026",
            bookedDate: "10 sep 2026",
            pnr: "483448384783",
            status: "COMPLETED"
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => { 
    renderBookingLayoutRows(historicalBookingsDataset.upcoming);
});

function toggleActiveTab(tabKey) {
    const btnUpcoming = document.getElementById("tabUpcoming");
    const btnCompleted = document.getElementById("tabCompleted");

    if (tabKey === 'upcoming') {
        btnUpcoming.classList.add("active");
        btnCompleted.classList.remove("active");
        renderBookingLayoutRows(historicalBookingsDataset.upcoming);
    } else {
        btnCompleted.classList.add("active");
        btnUpcoming.classList.remove("active");
        renderBookingLayoutRows(historicalBookingsDataset.completed);
    }
}

function renderBookingLayoutRows(dataArray) {
    const listWrapper = document.getElementById("bookingsWrapper");
    if (!listWrapper) return;

    listWrapper.innerHTML = ""; 
    if (dataArray.length === 0) {
        listWrapper.innerHTML = `
            <div style="text-align: center; padding: 50px 0; color: #666; font-size: 14px; background: #fff; border: 1px solid #e6e9ed;">
                No historical records found for this section.
            </div>`;
        return;
    }

    dataArray.forEach(booking => {
        const rowElement = document.createElement("div");
        rowElement.className = "booking-row-card";

        rowElement.innerHTML = `
                <div class="mock-vertical-logo">🚊</div>
                <div class="train-title-block">
                    <span class="train-main-title">${booking.trainName}</span>
                    <span class="train-number-lbl">(${booking.trainNumber})</span>
                </div>
            </div>

            <div class="card-center-schedule">
                <div class="route-path-lbl">${booking.route}</div>
                <div class="date-timestamp-block">
                    <span>date : <strong>${booking.travelDate}</strong></span>
                    <span style="color: #666666;">Booked on ${booking.bookedDate}</span>
                </div>
            </div>

            <div class="card-right-status">
                <div class="pnr-display-lbl">PNR : ${booking.pnr}</div>
                <div class="status-badge-lbl">
                    STATUS : <span class="status-value-cancelled">${booking.status}</span>
                </div>
            </div>
        `;

        listWrapper.appendChild(rowElement);
    });
}
