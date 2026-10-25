const trainsData = [
  {
    name: "Vaigai Express",
    number: "#12635",
    frequency: "Daily",
    departure: "13:50",
    arrival: "21:15",
    duration: "07h 25m",
    price: 465,
  },
  {
    name: "Pandian Express",
    number: "#12637",
    frequency: "Daily",
    departure: "21:40",
    arrival: "06:05",
    duration: "08h 25m",
    price: 445,
  },
  {
    name: "Vande Bharat Exp",
    number: "#20601",
    frequency: "Daily",
    departure: "06:00",
    arrival: "13:30",
    duration: "07h 30m",
    price: 1295,
  },
  {
    name: "Chennai Egmore Express",
    number: "#45786",
    frequency: "Daily",
    departure: "07:00",
    arrival: "15:30",
    duration: "08h 30m",
    price: 575,
  },
  {
    name: "SF Express",
    number: "#34678",
    frequency: "Daily",
    departure: "02:00",
    arrival: "11:30",
    duration: "09h 30m",
    price: 750,
  },
  {
    name: "Mankalur Express",
    number: "#57894",
    frequency: "Daily",
    departure: "01:00",
    arrival: "10:30",
    duration: "10h 30m",
    price: 1543,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  renderTrainCards(trainsData);
});

function renderTrainCards(trains) {
  const listContainer = document.getElementById("trainListContainer");
  listContainer.innerHTML = "";

  trains.forEach((train, index) => {
    const cardElement = document.createElement("div");
    cardElement.className = "train-card";

    cardElement.innerHTML = `
            <div class="train-details">
                <div class="train-name">${train.name}</div>
                <div class="train-meta">${train.number} | ${train.frequency}</div>
            </div>
            
            <div class="train-schedule">
                <div class="time-block">
                    <div class="time-display">${train.departure}</div>
                    <div class="label-display">Departure</div>
                </div>
                <div class="duration-timeline">
                    <span class="duration-text">${train.duration}</span>
                </div>
                <div class="time-block countries arrival">
                    <div class="time-display">${train.arrival}</div>
                    <div class="label-display">Arrival</div>
                </div>
            </div>
            
            <div class="train-pricing-action">
                <div class="price-tag">₹${train.price}</div>
                <button class="btn btn-book" onclick="bookTicket('${train.name}', ${train.price})">Book now</button>
            </div>
        `;

    listContainer.appendChild(cardElement);
  });
}

function bookTicket(trainName, price) {
  window.location.href = "show_book.html";
}

function modifySearch() {
  alert("Opening flight/train route dynamic modify filters panel...");
}
