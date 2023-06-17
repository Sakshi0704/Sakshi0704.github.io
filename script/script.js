/*-- -------------SHOW MENU ------------------ --*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/*-- -------- REMOVE MENU MOBILE ---------------- --*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

var typed = new Typed(".auto-type", {
    strings: ["Java Backend Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});


/*-- -------------- SKILLS ----------------------- --*/
const skillsContent = document.getElementsByClassName("skills_content");
skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills_content skills_close";
    }
    if (itemClass == "skills_content skills_close") {
        this.parentNode.className = "skills_content skills_open";
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills);
})

GitHubCalendar(".calendar", "Sakshi0704", {
    responsive: true,
    global_stats: false,
    tooltips: true,
  });


/*-- -------------------- SHOW SCROLL TOP -------------------- --*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


document.getElementById("resume-button-1").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/1WgetZ6ZpbxgOE-w6EvRjpTydytzbm4kS/view?usp=drive_link"
    );
  };
  
  document.getElementById("resume-link-2").onclick = () => {
    window.open(
      "https://drive.google.com/file/d/1WgetZ6ZpbxgOE-w6EvRjpTydytzbm4kS/view?usp=drive_link"
    );
  };

  