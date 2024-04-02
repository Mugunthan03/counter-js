let counter = document.getElementById('counter')
let result = document.getElementById('result')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
let increase = document.getElementById('increase')

 var count = 0

 decrease.addEventListener('click',function(){
    count = count-1
    
   result.textContent = count
 })

 reset.addEventListener('click',function(){
    count = 0
    
   result.textContent = count
 })

 increase.addEventListener('click',function(){
    count = count+1
    
   result.textContent = count
 })