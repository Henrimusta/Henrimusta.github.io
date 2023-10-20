//Navbar to stick to top of page on scroll
window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};