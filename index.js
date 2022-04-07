let selectedColor = 'red'
const painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

let blueBox = document.querySelector("#blue")

blueBox.addEventListener('click', function(){
selectedColor = 'blue'
})

let greenBox = document.querySelector('#green')

greenBox.addEventListener('click', function(){
    selectedColor = 'green'
})

let redBox = document.querySelector('#red')

    redBox.addEventListener('click', function(){
        selectedColor = 'red'
})

let yellowBox = document.querySelector('#yellow')

yellowBox.addEventListener('click', function(){
    selectedColor = 'yellow'
})