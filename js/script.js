const path = './resources/random-image-list/'

//If you add any image to ../resources/random-image-list, update this list too
const imageList = [
    'airplane.png',
    'arctichare.png',
    'baboon.png',
    'boat.png',
    'cat.png',
    'fruits.png',
    'frymire.png',
    'goldhill.png',
    'lena.png',
    'monarch.png',
    'mountain.png',
    'peppers.png',
    'pool.png',
    'sails.png',
    'serrano.png',
    'tulips.png',
    'watch.png'
]

let imageListLength = imageList.length

const card = document.querySelector('.cards .card-container .card')
const back = document.querySelector('.cards .card-container .card .back')

window.onload = (events)=>{
    back.src = chooseImagePath();
    card.addEventListener('mouseleave', e => {
        setTimeout(() => {
            back.src = chooseImagePath()
            console.log('mouseleave')
        },1000);
    })  
}

const chooseImagePath = () =>{
    return path + imageList[Math.floor(Math.random()*imageListLength)]
}