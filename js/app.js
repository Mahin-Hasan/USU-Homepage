const divContainer = document.getElementById('hidden_item');
let isClicked = true;

let toggleVisibility = function () {
    console.log('clicked')
    if (isClicked) {
        divContainer.style.display = 'block';
        isClicked = false;
    }
    else{
        divContainer.style.display= 'none';
        isClicked=true;
    }
}