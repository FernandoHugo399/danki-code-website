var icon = document.querySelectorAll('.icon-menu-mobile')[0];
var menu = document.querySelectorAll('.menu-mobile')[0];

addEventListener('resize', ()=>{
    if(document.body.clientWidth > 751){
        if(menu.classList.contains('mobah')){
            menu.classList.remove('mobah')
        }
    }
})

icon.addEventListener('click', ()=>{
    if(menu.classList.contains('mobah')){
        menu.classList.remove('mobah')
    } else{
        menu.classList.add('mobah')
    }
})