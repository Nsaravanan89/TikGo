document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("refundForm");
  const refundInput = document.getElementById("refundInput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = refundInput.value.trim();

    if (value.length > 10) {
      alert("Verifying refund status for ID: " + value);
      refundInput.value = " ";
    } else {
      alert("Please enter a valid PNR or Transaction ID.");
      refundInput.value = " ";
    }
  });
});
