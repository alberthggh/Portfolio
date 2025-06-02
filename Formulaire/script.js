const forme = document.getElementById('form');
const pwd = document.getElementById('password');
const conf = document.getElementById('confirm');
const messag = document.getElementById('message');
const confirme = document.getElementById('message1');
const rempli = document.getElementById('message2');
const mail = document.getElementById('email');
const rename = document.getElementById('prenom');
const nom = document.getElementById('nom');
forme.addEventListener("submit", function(event){
    event.preventDefault();
    const pass = pwd.value;
    const con = conf.value;
    if(pass.length < 8){
        messag.textContent = "le mot de passe doit contenir au moins 8 caractères.";
        messag.style.color="red";
    }
    if(!pass|| !con|| !mail||!nom ||!rename){
        rempli.textContent= "Tous les champs n'ont pas été rempli";
        rempli.style.color="red";
    }
    if(pass !== con){
        confirme.textContent="Le mot de passe n'a pas été vérifié";
        confirme.style.color="red";
    }
});