'use strict';
var ProductImages = [];
var votesArr = [];
var viewArr = [];

function Product(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.view = 0;
    Product.prototype.allProducts.push(this);
    ProductImages.push(name);
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
var imageDiv = document.getElementById('images-div');
var showResultsInButton = document.getElementById('final-res');
var maxRoundForms = document.getElementById('max-rounds');
var leftImageIndex;
var centerImageIndex;
var rightImageIndex;
var maxClickUser = 25;
var userClickCounter = 0;
var perviousImages = [];


function renderThreeRandomImages() {
    do {
        leftImageIndex = randomNuberGenerator();
        rightImageIndex = randomNuberGenerator();
        centerImageIndex = randomNuberGenerator();
    } while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || centerImageIndex === rightImageIndex || perviousImages.includes(leftImageIndex) || perviousImages.includes(rightImageIndex) || perviousImages.includes(centerImageIndex));
    
    perviousImages = [leftImageIndex, rightImageIndex, centerImageIndex]
    


    leftImageElement.src = Product.prototype.allProducts[leftImageIndex].source;
    Product.prototype.allProducts[leftImageIndex].view++;
    centerImageElement.src = Product.prototype.allProducts[centerImageIndex].source;
    Product.prototype.allProducts[centerImageIndex].view++;
    rightImageElement.src = Product.prototype.allProducts[rightImageIndex].source;
    Product.prototype.allProducts[rightImageIndex].view++;
}

renderThreeRandomImages();

imageDiv.addEventListener('click', clickByUser);
showResultsInButton.addEventListener('click', showResults);
maxRoundForms.addEventListener('submit', setMaxUserRounds);




function clickByUser(event) {

    if (userClickCounter < maxClickUser) {

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



    } else {
        imageDiv.removeEventListener('click', clickByUser);
        showResultsInButton.disabled = false;

    }

}

function showResults() {
    var resultsList = document.getElementById('final-results');
    chartResults()

    var endResult;
    for (var i = 0; i < Product.prototype.allProducts.length; i++) {
        endResult = document.createElement('li');
        endResult.textContent = Product.prototype.allProducts[i].name + 'had ' + Product.prototype.allProducts[i].vote + ' votes , and was seen ' + Product.prototype.allProducts[i].view + ' times.'
        resultsList.appendChild(endResult);


    }

}



function setMaxUserRounds(event) {
    event.preventDefault();
    maxClickUser = event.target.rounds.value;
}





function chartResults() {
    for (var i = 0; i < Product.prototype.allProducts.length; i++) {
        votesArr.push(Product.prototype.allProducts[i].vote);
        viewArr.push(Product.prototype.allProducts[i].view);

    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',


        // The data for our dataset
        data: {
            labels: ProductImages,
            datasets: [{
                label: 'Your Resutls',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: votesArr,
                


            },
            {
                label: 'Your view',
                backgroundColor: 'rgb(0, 0, 0)',
                borderColor: 'rgb(0, 0, 0)',
                data: viewArr,
            }
        ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 10,
                        min: 0,
                        beginAtZero: 0,
                        stepSize: 1,
                    }
                }],

            }
        }
    });
   


}




