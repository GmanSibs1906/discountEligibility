function checkEligibility(event) {
  event.preventDefault();

  //   Collect and Assign user input to variables
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let verify = document.getElementById("verify");

  //   link to modal where we will disply outcome
  const formValidationMessage = document.getElementById("validationMessage");

  //   Conditional statemets
  //   1. If name filled and above 65 years old = eligable
  //   2. if under 18 or name not entered or not a student = not eligable
  //   3. if name entered and over 18 and a student = eligable
  if (name !== "" && age >= 65) {
    formValidationMessage.textContent =
      " Congradulations, You are eligable for senior discount";
  } else if (name === "" || age < 18 || !verify.checked) {
    formValidationMessage.textContent =
      "Sorry, You are not eligable for a discount";
  } else {
    formValidationMessage.textContent =
      " Congradulations, You are eligable for a discount";
  }

  // Show the modal
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}
// close modal
function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};
