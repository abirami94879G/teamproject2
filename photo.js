var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");

function openImage(src) {
    fullimg.src = src;
    fullimgbox.style.display = "flex"; 
}

function closeImage() {
    fullimgbox.style.display = "none"; 
}