// disparition du header

let bg_header = document.querySelector(".header");
let bg_hauteur = bg_header.offsetTop;
document.addEventListener('scroll', () => {
    if(window.pageYOffset > bg_hauteur){
        bg_header.classList.add("header-not");
    }else{
        bg_header.classList.remove("header-not");
    }
});