var img = document.querySelectorAll("img")

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function(){
        this.classList.toggle("fadeOut")
    })
}