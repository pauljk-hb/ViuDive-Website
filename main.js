const nav = document.getElementsByClassName('nav')[0];
const navbk = document.getElementsByTagName('nav')[0];
const navItem = document.getElementsByClassName('nav-item');

window.addEventListener('scroll', () =>{
    let offset = window.scrollY;
    if (offset > 700) {
        nav.style.height = '6rem';
        navbk.style.backgroundColor = 'white';

        for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.color = 'var(--darkBlue)';
            navItem[i].style.fontFamily  = 'var(--normal)';
        }
    }else{
        nav.style.height = '5rem';
        navbk.style.backgroundColor = 'transparent';

        for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.color = 'white';
            navItem[i].style.fontFamily  = 'var(--extraLight)';
        }
    }

})