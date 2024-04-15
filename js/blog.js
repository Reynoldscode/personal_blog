const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {
  
// Get the user data from local storage
const userData = JSON.parse(localStorage.getItem("userData"));

// Navigate to the next HTML page
window.location.href = "nextPage.html";
});