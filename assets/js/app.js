window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    document.querySelector(".header").classList.add("stickyheader");
    var whlogo = document.querySelector(".white-logo");
    whlogo.src = "assets/images/bankai-logo-blue.svg";
    whlogo.classList.add("white-logo-stick");
    document.querySelectorAll(".nav-link").forEach((navElement) => {
      navElement.style.color = "#000";
    });
  } else {
    document.querySelector(".header").classList.remove("stickyheader");
    var whlogo = document.querySelector(".white-logo");
    whlogo.src = "assets/images/bankai-logo.svg";
    whlogo.classList.remove("white-logo-stick");
    document.querySelectorAll(".nav-link").forEach((navElement) => {
      navElement.style.color = "#fff";
    });
  }
});

let menubtn = document.querySelector(".menu-btn");
menubtn.addEventListener("click", () => {
  document.getElementById("sidemenuid").classList.add("sidemenuphone");
});

let closemenubtn = document.querySelector(".sidemenu-cross");
closemenubtn.addEventListener("click", () => {
  document.getElementById("sidemenuid").classList.remove("sidemenuphone");
});

document.querySelectorAll(".sidemenu-item").forEach((phElement) => {
  phElement.addEventListener("click", () => {
    document.getElementById("sidemenuid").classList.remove("sidemenuphone");
  });
});
