const navControlButton = document.getElementById("nav-control");
const navMenu = document.getElementById("navigation");

function toggleNav()
{
    navControlButton.classList.toggle("toggled");
    navMenu.classList.toggle("toggled");
}

navControlButton.addEventListener("click", toggleNav);

document.querySelectorAll(".nav-link").forEach(   
                          link => link.addEventListener("click",
                          () => {
                            navControlButton.classList.remove("toggled");
                            navMenu.classList.remove("toggled");
                            }));


// const serviceObserver = new IntersectionObserver();


    