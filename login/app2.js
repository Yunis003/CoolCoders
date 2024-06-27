let semi=document.querySelector('.semi2')
semi.addEventListener('click',function(){
    window.location.href='../index.html'
})

let lgn=document.querySelector('.lgn')
let linked=document.querySelector('.linked')
let checkbox=document.querySelector('.checkbox')

linked.addEventListener('click',function(){
    lgn.textContent='Sign Up'
    semi.textContent='Sign Up'
    checkbox.style.display='block'
})

