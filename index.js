let selectedColor = 'red'
const painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

let colorBoxes = document.querySelectorAll(".color-choice")
console.log(".........colorBoxes", colorBoxes)
for(let i = 0; i < colorBoxes.length; i++){
    colorBoxes[i].addEventListener('click', function(){
        selectedColor = colorBoxes[i].id
    })
}