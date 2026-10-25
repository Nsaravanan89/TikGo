document.addEventListener("DOMContentLoaded", () => {
  const fromStationInput = document.getElementById("fromStation");
  const toStationInput = document.getElementById("toStation");
  const swapBtn = document.getElementById("swapStations");

  swapBtn.addEventListener("click", () => {
    const tempValue = fromStationInput.value;
    fromStationInput.value = toStationInput.value;
    toStationInput.value = tempValue;
  });

  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const bookingForm = document.getElementById("bookingForm");
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const from = fromStationInput.value.trim();
    const to = toStationInput.value.trim();
    const date = document.getElementById("journeyDate").value;

    if (!from || !to) {
      alert("Please enter the departure and destination stations.");
    }else{
      window.location.href = "book.html";
    }
  });
});
