const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: "pk_test_9bfe228ba3874441d50fd06f31e4a78cbaebff9c", // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: 500000, // 5000 * 100 (converting to kobo or smallest currency unit)
    currency: "KES",
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });

  handler.openIframe();
}
