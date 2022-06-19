const validateText = document.querySelector(".validate__text");
const errorEl = document.querySelector(".error");

function validate() {
  const email = document.getElementById("email").value;

  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(email)) {
    setTimeout(function () {
      validateText.innerHTML = "";
    }, 3000);
  } else {
    errorEl.classList.add("active");
    validateText.innerHTML = "Please provide a valid email";
    setTimeout(function () {
      errorEl.classList.remove("active");
      validateText.innerHTML = "";
    }, 3000);
  }
}
