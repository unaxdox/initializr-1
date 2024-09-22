//1.ari
window.onload = function(){
    let bat = document.querySelector("#uno");
    bat.innerText = "Bat";

    let bi = document.querySelector("#dos");
    bi.innerText = "Bi";

    let hiru = document.querySelector("#hiru");
    hiru.innerText = "Hiru";
}

//1.a
let bat = document.getElementById('uno');

bat.onclick = () => {
    let h1tit = document.querySelectorAll("h1");
    let tit = Array.from(h1tit);
    tit.forEach( h1elementu => {
        h1elementu.style.color = "red"
    });
}

//1.b
let bi = document.getElementById('dos');

bi.onclick = () => {
    let h2tit = document.querySelectorAll("h2");
    let tit = Array.from(h2tit);
    tit.forEach((h2elementu,i) => {
        h2elementu.innerText = "goiburu2-"+(i+1);
    });
}

//1.c 
let hiru = document.getElementById('hiru');

hiru.onclick = () => {
    let goiburuak = [];
    ["h1","h2","h3"].forEach(goiburu =>{
        let elements = Array.from(document.querySelectorAll(goiburu));
        goiburuak = goiburuak.concat(elements);
    })
    console.log(goiburuak);
}
