let actualTransition = 0;
let actualImage = 0
let timeTransition = 8000;
let autoMove = setInterval(() => {
    moveCarrousel(100)
}, timeTransition);
function moveCarrousel (param, resetTime){
    if(resetTime){
        clearInterval(autoMove);
        autoMove = setInterval(() => {
            moveCarrousel(100)
        }, timeTransition);
    }
    let countImages = document.getElementsByClassName('image-carousel').length;
    // debugger
    if (param > 0 && actualImage < countImages) {
        actualImage = actualImage + 1;
        if (actualImage >= countImages) {
            actualImage = 0;
        }
        actualTransition = param * actualImage
        
        
        document.querySelector('.arrow-left').setAttribute('style', `transform: translateX(${actualTransition }vw)`);
        document.querySelector('.arrow-right').setAttribute('style', `transform: translateX(${actualTransition }vw)`);
        document.querySelector('.carrousel').setAttribute('style', `transform: translateX(${actualTransition * -1}vw)`);
    } else{
        actualImage = actualImage - 1;
        if (actualImage < 0) {
            actualImage = countImages - 1;
        }
        actualTransition = param * actualImage
        document.querySelector('.arrow-left').setAttribute('style', `transform: translateX(${actualTransition * -1}vw)`);
        document.querySelector('.arrow-right').setAttribute('style', `transform: translateX(${actualTransition * -1}vw)`);
        document.querySelector('.carrousel').setAttribute('style', `transform: translateX(${actualTransition}vw)`);
    }
}

let formActive = false;
function openForm(){
    formActive = !formActive;
    if (formActive) {
        document.querySelector('#open-form').setAttribute('style', 'display: none');
        document.querySelector('.fixed-form').setAttribute('style', 'display: flex; visibility: visible;opacity: 1;');
        setTimeout(() => {
            
            document.querySelector('.container-form').setAttribute('style', 'transform: translateX(0%);');
        }, 100);
    } else {
        setTimeout(() => {
            document.querySelector('#open-form').setAttribute('style', 'display: block');
            document.querySelector('.fixed-form').setAttribute('style', 'display: none');
        }, 2000);
        document.querySelector('.container-form').setAttribute('style', 'transform: translateX(100%);');
    }
}
