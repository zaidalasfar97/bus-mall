'use strict';

function Product(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.view = 0;
    Product.prototype.allProducts.push(this);
}

Product.prototype.allProducts = [];
// create objects 
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

function randomNuberGenerator() {
    return Math.floor(Math.random() * (Product.prototype.allProducts.length));

}


var leftImageElement = document.getElementById('left-image');
var centerImageElement = document.getElementById('center-image');
var rightImageElement = document.getElementById('right-image');
var imageDiv =document.getElementById('images-div');
var showResultsInButton =document.getElementById('final-res');
var maxRoundForms = document.getElementById('max-rounds');
var leftImageIndex;
var centerImageIndex;
var rightImageIndex;
var maxClickUser = 25;
var userClickCounter = 0;


function renderThreeRandomImages() {
    leftImageIndex = randomNuberGenerator();

    do {
        rightImageIndex = randomNuberGenerator();
        centerImageIndex = randomNuberGenerator();
    } while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || centerImageIndex === rightImageIndex);

    leftImageElement.src = Product.prototype.allProducts[leftImageIndex].source;
    Product.prototype.allProducts[leftImageIndex].view++;
    centerImageElement.src = Product.prototype.allProducts[centerImageIndex].source;
    Product.prototype.allProducts[centerImageIndex].view++;
    rightImageElement.src = Product.prototype.allProducts[rightImageIndex].source;
    Product.prototype.allProducts[rightImageIndex].view++;
}

renderThreeRandomImages();

imageDiv.addEventListener('click',clickByUser);
showResultsInButton.addEventListener('click',showResults);
maxRoundForms.addEventListener('submit',setMaxUserRounds);




function clickByUser(event) {
    
    userClickCounter++;

    if (userClickCounter <= maxClickUser) {
        
        if (event.target.id === 'left-image') {
            userClickCounter++
            Product.prototype.allProducts[leftImageIndex].vote++;
            renderThreeRandomImages();

        } else if (event.target.id === 'center-image') {
            userClickCounter++
            Product.prototype.allProducts[centerImageIndex].vote++;
            renderThreeRandomImages();
        } else if (event.target.id === 'right-image') {
            userClickCounter++
            Product.prototype.allProducts[rightImageIndex].vote++;
            renderThreeRandomImages();
        }
        
      

    }else {
        imageDiv.removeEventListener('click',clickByUser);
        showResultsInButton.disabled=false;
    }

    
}

function showResults() {
     var resultsList = document.getElementById('final-results');
       
        
        var endResult;
        for (var i = 0; i < Product.prototype.allProducts.length; i++) {
            endResult = document.createElement('li');
            endResult.textContent = Product.prototype.allProducts[i].name + 'had '+ Product.prototype.allProducts[i].vote+ ' votes , and was seen '+  Product.prototype.allProducts[i].view +'times.'
            resultsList.appendChild(endResult);
        }

}
 
function setMaxUserRounds(event){
    event.preventDefault();
    maxClickUser=event.target.rounds.value;
}



