const h1Els = document.querySelectorAll("h1");
h1Els.forEach(h => makeLink(h,"http://blog.bronkode.co.za"));

function makeLink(el,uri){
    el.style.cursor = "pointer";
    el.onclick = ()=> {window.location.href = uri;};
}
