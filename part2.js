const userForm = document.querySelector(".array fieldset");
const name=userForm.querySelector('input[name="fio"]').value
const phoneNumber = userForm.querySelector('input[name="phone"]').value;
const dataOfBirth = userForm.querySelector('input[name="birthday"]').value;
const emailAddress = userForm.querySelector('input[name="email"]').value;

module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};
