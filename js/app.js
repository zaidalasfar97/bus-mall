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

function randomNuberGenerator(min, max) {
    return Math.floor(Math.random() * (Product.prototype.allProducts.length));

}
console.log(Product.prototype.allProducts);

var leftImageElement = document.getElementById('left-image');
var centerImageElement = document.getElementById('center-image');
var rightImageElement = document.getElementById('right-image');

var leftImageIndex;
var centerImageIndex;
var rightImageIndex;


function renderThreeRandomImages() {
    leftImageIndex = randomNuberGenerator();

    do {
        rightImageIndex = randomNuberGenerator();
        centerImageIndex = randomNuberGenerator();
    } while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || centerImageIndex === rightImageIndex);

    leftImageElement.src = Product.prototype.allProducts[leftImageIndex].source;
    centerImageElement.src = Product.prototype.allProducts[centerImageIndex].source;
    rightImageElement.src = Product.prototype.allProducts[rightImageIndex].source;
}

renderThreeRandomImages();


leftImageElement.addEventListener('click', clickByUser);
centerImageElement.addEventListener('click', clickByUser);
rightImageElement.addEventListener('click', clickByUser);

var maxClickUser = 25;
var userClickCounter = 0;

function clickByUser(event) {
    
    userClickCounter++;

    if (userClickCounter <= maxClickUser) {
        Product.prototype.allProducts[leftImageIndex].view++;
        Product.prototype.allProducts[centerImageIndex].view++;
        Product.prototype.allProducts[rightImageIndex].view++;
        if (event.target.id === 'left-image') {
            Product.prototype.allProducts[leftImageIndex].vote++;
            renderThreeRandomImages();

        } else if (event.target.id === 'center-image') {
            Product.prototype.allProducts[centerImageIndex].vote++;
            renderThreeRandomImages();
        } else if (event.target.id === 'right-image') {
            Product.prototype.allProducts[rightImageIndex].vote++;
            renderThreeRandomImages();
        }
        
      

    }else {
        var resultsList = document.getElementById('final-results');
        console.log('final-results',resultsList);
        
        var endResult;
        for (var i = 0; i < Product.prototype.allProducts.length; i++) {
            endResult = document.createElement('li');
            endResult.textContent = Product.prototype.allProducts[i].name + 'had '+ Product.prototype.allProducts[i].vote+ ' votes , and was seen '+  Product.prototype.allProducts[i].view +'times.';
            resultsList.appendChild(endResult);
        }
        rightImageElement.removeEventListener('click', clickByUser);
        centerImageElement.removeEventListener('click', clickByUser);
        leftImageElement.removeEventListener('click', clickByUser);

    }

    
}






