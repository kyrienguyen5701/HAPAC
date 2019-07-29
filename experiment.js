var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    l = w.innerWidth || e.clientWidth || g.clientWidth,
    h = w.innerHeight|| e.clientHeight|| g.clientHeight;
    console.log(h);

var exp = document.getElementById("experiment");
window.onscroll = function(ev) {
    console.log(window.innerHeight);
    console.log(window.scrollY);
    if ((window.innerHeight + window.scrollY) >= h * 1.828){
        exp.style.position = "fixed";
        exp.style.top = "100px";
        exp.style.right = "5px";
    }
    else {
        exp.style.position = "static";
    }
}
