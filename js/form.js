const reyForm = document.getElementById("user-form");
reyForm.addEventListener("click", e => {
e.preventDefault();
const userData = {
name: document.getElementById("reyName").value,
title: document.getElementById("reyTitle").value,
comment: document.getElementById("reyComment").value
};
// Store data in local storage as JSON
localStorage.setItem("userData", JSON.stringify(userData));
});

const userData = JSON.parse(localStorage.getItem("userData"));