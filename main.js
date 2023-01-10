function stranica1(){
    window.open("https://travokbalkan.ba");
}

function stranica2(){
    window.open("https://edsa-systems.de");
}

function pocetna(){
    window.open("https://getatdesign.com","_self");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

