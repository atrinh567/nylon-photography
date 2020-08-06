var imgs = [
    "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80",
    "https://images.unsplash.com/photo-1536405747716-8cd8bb309ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    "https://images.unsplash.com/photo-1519598590071-ba4229c878b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
  ];
  
var bkg = document.getElementById("camera-photo");
bkg.src = imgs[0];
var c = 1;

var timer = setInterval(automaticSlideShow, 5000);

function automaticSlideShow() {
    bkg.src = imgs[c];

    var galleryBtns = document.getElementById("gallery-nav-btns");
    var galleryBtnsLi = galleryBtns.getElementsByTagName("li");
    console.log(galleryBtnsLi[0].a.style.bacgrkoundColor);

    c += 1;
    if (c == imgs.length) {
        c = 0;
    }
}