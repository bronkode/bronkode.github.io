document.querySelectorAll("h1")
.forEach(h => makeLink(h,"http://blog.bronkode.co.za"));

document.querySelectorAll("[data-bk-template]")
.forEach(d => fillTemplate(d));


function makeLink(el,uri){
    el.style.cursor = "pointer";
    el.onclick = ()=> {window.location.href = uri;};
}

function fillTemplate(el){
    let expr = /\`(\s*?.*?)*?\`/g;
    let tmpHtml = el.innerHTML;
    let match = tmpHtml.match(expr);
    match.forEach(m => tmpHtml = tmpHtml.replace(m,eval(m)));
    el.innerHTML = tmpHtml;
    
}


