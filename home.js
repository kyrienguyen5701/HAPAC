var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    l = w.innerWidth || e.clientWidth || g.clientWidth,
    h = w.innerHeight|| e.clientHeight|| g.clientHeight;
// console.log(l,h);


for(let i = 0; i < 20; i++){
    var modal = document.getElementById("my_modal");
    var zoom = document.getElementById("zoom");
    var cap = document.getElementById("caption");
    var img = document.getElementsByClassName("small_img")[i];
    img.addEventListener("click", function() {
        modal.style.display = "block";
        zoom.src = this.src;
        cap.innerHTML = this.alt;
        
    });
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    };
};

var modal = document.getElementById("my_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}





