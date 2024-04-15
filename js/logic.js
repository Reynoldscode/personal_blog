const onToggle = document.getElementById("theme-switcher");
onToggle.addEventListener("change", toggleTheme);



function toggleTheme(){
  if(onToggle.checked){
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  document.querySelector("header").classList.add("dark-header");
  document.querySelector("footer").classList.add("dark-footer");
  document.querySelector("body").classList.add("dark-body");
  } else{
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  document.querySelector("header").classList.add("light-header");
  document.querySelector("footer").classList.add("light-footer");
  document.querySelector("body").classList.add("light-body");
  }
  }