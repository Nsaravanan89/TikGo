document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "book.html";
  });

  const districts = ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"];
  const datalistTag = document.getElementById("district-list");

  districts.map((district) => {
    const option = document.createElement("option");
    option.value = district;

    datalistTag.appendChild(option);
  });
});
