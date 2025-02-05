
document.addEventListener("DOMContentLoaded", function () {
  console.log("Contact Page Loaded!")

  let form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      let name = document.querySelector('input[name="name"]').value.trim();
      let email = document.querySelector('input[name="email"]').value.trim();
      let message = document
        .querySelector('textarea[name="message"]')
        .value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting!");
        event.preventDefault(); 
      }
    });
  }
});
