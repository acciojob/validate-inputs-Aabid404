//your JS code here. If required.

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");

function validateInput(input, pattern) {
  if (pattern.test(input.value)) {
    input.style.backgroundColor = "lightgreen";
  } else {
    input.style.backgroundColor = "pink";
  }
}

nameInput.addEventListener("input", function () {
  validateInput(nameInput, /^[A-Za-z]{3,}$/);
});

emailInput.addEventListener("input", function () {
  validateInput(emailInput, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
});

mobileInput.addEventListener("input", function () {
  validateInput(mobileInput, /^[0-9]{10}$/);
});
 