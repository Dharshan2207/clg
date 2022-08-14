let burger = document.querySelector(".burger"),
    links = document.querySelector(".nav-links"),
    textTransform = document.querySelector(".text-center")

burger.addEventListener("click", () => {
    links.classList.toggle("nav-show");
    textTransform.classList.toggle("text-transform")
    })

