let bell=document.querySelector('.bell')
let burger=document.querySelector('.burger-menu')
let menuItem=document.querySelector('.menu-item')
bell.style.color='orange'
bell.addEventListener('click', function(){
    document.querySelector('.message-box').classList.toggle('show')
    bell.style.color='black'
})


let icon=document.querySelector('.burger')
let respons=document.querySelector('.respons')
icon.addEventListener('click',function(){
    respons.classList.toggle('respons2')
})

let message=document.querySelector('.message')



