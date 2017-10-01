const h1Els = document.querySelectorAll("h1");
h1Els.forEach(h => {
    h.onclick = navHome();
});

function navHome(){
    window.location = "http;//blog.bronkode.co.za";
}