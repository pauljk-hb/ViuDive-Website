const nav = document.getElementsByClassName('nav')[0];
const navbk = document.getElementsByTagName('nav')[0];
const navItem = document.getElementsByClassName('nav-item');

window.addEventListener('scroll', () =>{
    let offset = window.scrollY;
    console.log(offset);
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

// scrolling Effekt
window.addEventListener('scroll', ()=>{
    const img = document.getElementsByClassName('imgSlide');
    let offset = window.scrollY;

    for (let i = 0; i < img.length; i++) {
        let style = getComputedStyle(img[i]);
        let imgPosition = style.backgroundPositionY;
        imgPosition = imgPosition.slice(0, -2);  
        imgPosition = Math.abs(imgPosition);

        console.log(imgPosition)
        
        let Position = ((offset) * 0.3) - 600;
        
        img[i].style.backgroundPositionY = Position + 'px';
        
    }
    // for (let i = 0; i < img.length; i++) {
    //     img[i].style.backgroundPositionY = offset * 0.7 +"px";
    // }
})