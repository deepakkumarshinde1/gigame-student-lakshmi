let form = document.querySelector("#formData");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let validation = {
    password: {
      pattern: /^[a-z]{3}$/i,
    },
  };
  let formData = new FormData(form);
  let password = formData.get("password");
  if (!validate(validation, password, "password")) {
    alert("in-Correct password");
    return false;
  }
});

function validate(validation, value, name) {
  let regEx = new RegExp(validation[name].pattern);
  return regEx.test(value);
}
