const reyForm = document.getElementById("user-form");

// Listen for input changes
reyForm.addEventListener("input", e => {
const userData = {
name: document.getElementById("reyName").value,
title: document.getElementById("reyTitle").value,
comment: document.getElementById("reyComment").value
};
localStorage.setItem("userData", JSON.stringify(userData));
});

// Listen for form submission
reyForm.addEventListener("submit", e => {
e.preventDefault();
window.location.href = "./blog.html";
});