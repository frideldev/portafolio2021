let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
toggle.onclick = ()=>{
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
//theme Dark Mode
themeSwitch.onclick=()=>{
    body.classList.toggle('dark');
}

function toogleMenu(){
    let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
navigation.classList.remove('active');
main.classList.remove('active');
}