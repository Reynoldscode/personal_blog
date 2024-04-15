const userData = JSON.parse(localStorage.getItem("userData"));

document.querySelector('.user').textContent = userData.name;
document.querySelector('.title').textContent = userData.title;
document.querySelector('.story').textContent = userData.comment;


document.getElementById("backblog").addEventListener("click", function() {
  window.location.href = "./index.html";
  });