document.getElementById("emailId").value = "";
document.getElementById("password").value = "";
let emailId = document.getElementById("emailId");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let link = `http://localhost:8000/form/list-type/verify`;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let data;
  data = { emailId: emailId.value, password: password.value };
  console.log(JSON.stringify(data));
  fetch(link, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.text())
    .then((response) => {
      console.log(response);
      location.replace(`${response}`);
    })
    .catch((errorFetch) => console.log(errorFetch));
  document.getElementById("emailId").value = "";
  document.getElementById("password").value = "";
});
