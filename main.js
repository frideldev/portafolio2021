let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
let list = document.querySelectorAll('.list');
let workBx=document.querySelectorAll('.workBx');
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

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click',()=>{
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        list[i].classList.add('active');
        let dataFilter=list[i].getAttribute('data-filter');
        for (let k = 0; k < workBx.length; k++) {
            workBx[k].classList.remove('active');
            workBx[k].classList.add('hide');
            if(workBx[k].getAttribute('data-item')==dataFilter||dataFilter == "all"){
                workBx[k].classList.remove('hide'); 
                workBx[k].classList.add('active'); 
            }
        }
    });
    
}