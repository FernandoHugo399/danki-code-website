var icon = document.querySelectorAll('.icon-menu-mobile')[0];
var menu = document.querySelectorAll('.menu-mobile')[0];
var cont = document.querySelectorAll('.flex-content-header')[0];

addEventListener('resize', ()=>{
    if(document.body.clientWidth > 751){
        if(menu.classList.contains('mobah')){
            menu.classList.remove('mobah')
            cont.classList.remove('padtop')
        }
    }
})

icon.addEventListener('click', ()=>{
    if(menu.classList.contains('mobah')){
        menu.classList.remove('mobah')
        cont.classList.remove('padtop')
    } else{
        menu.classList.add('mobah')
        cont.classList.add('padtop')
    }
})
