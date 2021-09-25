lastIndex = 0
const bullets = document.querySelectorAll('.bullet-single');
bullets.forEach((item,index)=>{
    document.querySelectorAll('.bullet-single')[index]
    .addEventListener('click', ()=>{
        document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');
        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');
        lastIndex = index;
    })
    
})
