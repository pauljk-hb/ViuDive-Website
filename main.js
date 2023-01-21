const nav = document.getElementsByClassName('nav')[0];
const navbk = document.getElementsByTagName('nav')[0];
const navItem = document.getElementsByClassName('nav-item');
const hamColor = document.querySelectorAll('.hamburger div');

window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    console.log(offset);
    if (offset > 700) {
        nav.style.height = '6rem';
        navbk.style.backgroundColor = 'white';
        hamColor.forEach(hamColor =>{
            hamColor.style.background = 'var(--darkBlue)';
        })
        
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.color = 'var(--darkBlue)';
            navItem[i].style.fontFamily = 'var(--normal)';
        }

    } else {
        nav.style.height = '5rem';
        navbk.style.backgroundColor = 'transparent';
        hamColor.forEach(hamColor =>{
            hamColor.style.background = 'white';
        })

        for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.color = 'white';
            navItem[i].style.fontFamily = 'var(--extraLight)';
        }

    }

})

// scrolling Effekt

    window.addEventListener('scroll', () => {
        const img = document.getElementsByClassName('imgSlide');
        let offset = window.scrollY;

        if(img.length > 1){
            img[0].style.backgroundPositionY = ((offset) * 0.3) - 400 + 'px';
            img[1].style.backgroundPositionY = ((offset) * 0.3) - 600 + 'px';
            img[2].style.backgroundPositionY = ((offset) * 0.3) - 850 + 'px';
        }else{
            img[0].style.backgroundPositionY = ((offset) * 0.3) - 600 + 'px';

        }
    
    })

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-item-list");
const links = document.querySelectorAll(".nav-item");
const linkEle = document.querySelectorAll(".nav-item-list ol");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("active");

    links.forEach(link => {
        link.classList.toggle("active");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});