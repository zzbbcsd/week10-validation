var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var formError = document.getElementById("form-error");

function validateName() {
  var name = document.getElementById("input-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }

  if (!name.match(/^(([a-zA-Z]{2,15}){1}(\s([a-zA-Z]{2,15}))+)$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("input-phone").value;
  if (phone.length === 0) {
    phoneError.innerHTML = "Phone.No is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone.No should be 10 digits";
    console.log(phone.length);
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Please input valid phone";
    return false;
  }
  phoneError.innerHTML = "";
  return true;
}

function validateEmail() {
  var email = document.getElementById("input-email").value;
  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/[\w|.|-]*@\w*\.[\w|.]*/g)) {
    emailError.innerHTML = "Please insert valid email";
    return false;
  }
  email.innerHTML = "";
  return true;
}

function validateMessage() {
  var input = document.getElementById("input-message").value;
  if (input.length === 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }
  formError.innerHTML = "";
  return true;
}

function validateForm() {
  if (
    !validateEmail() ||
    !validateMessage() ||
    !validateName() ||
    !validatePhone()
  ) {
    formError.style.display("block");
    formError.innerHTML = "please fix error to submit";
    setTimeout(function () {
      formError.style.display = "none";
    }, 3000);
    return true;
  }
}
