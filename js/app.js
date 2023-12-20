const products = [
    {
        id : 1,
        name : "coffee ice latte",
        img : "./image/Iced Chai Latte.jpg",
        price : 2.99,
        category : "coffee",
        description : "Coffee ice latte"
    },
    {
        id : 2,
        name : "chocolate frappe",
        img : "./image/Double Chocolate Chip Frappuccino.jpg",
        price : 1.99,
        category : "frappe",
        description : "Chocolate ice cream"
    },
    {
        id : 3,
        name : "Mocha Frappes",
        img : "./image/Making Mocha Frappes at Home_ My quest for the best - Cold Brew Queen.jpg",
        price : 1.99,
        category : "frappe",
        description : "Making Mocha Frappes at Home"
    },
    {
        id : 4,
        name : "Fudgey",
        img : "./image/The Latest Fudgey Starbucks Frapp Puts All Others To Shame.jpg",
        price : 1.99,
        category : "frappe",
        description : "The Latest Fudgey Starbucks"
    }
    ,
    {
        id : 5,
        name : "Hambergeur",
        img : "./image/bread (1).jpg",
        price : 2.99,
        category : "bread",
        description : "Hambergeur cheese"
    },
    {
        id : 6,
        name : "fried chicken",
        img : "./image/food (1).jpg",
        price : 2.99,
        category : "food",
        description : " fried chicken with tomatoes"
    },
    {
        id : 7,
        name : "fried rice",
        img : "./image/milk (1).jpg",
        price : 2.99,
        category : "milk",
        description : " strawberry milk "
    },
    {
        id : 8,
        name : "cold Coffee",
        img : "./image/coffe (1).jpg",
        price : 2.99,
        category : "coffee",
        description : " cold Coffee "
    },
    {
        id : 9,
        name : "Coffee",
        img : "./image/coffe (2).jpg",
        price : 2.99,
        category : "coffee",
        description : " Coffee "
    },
    {
        id : 10,
        name : "Coffee",
        img : "./image/coffe (3).jpg",
        price : 2.99,
        category : "coffee",
        description : " Coffee "
    },
    {
        id : 11,
        name : "Hambergeur ",
        img : "./image/food (4).jpg",
        price : 2.99,
        category : "Hambergeur ",
        description : " food "
    },
    {
        id : 12,
        name : "coffee frappe",
        img : "./image/frappe (3).jpg",
        price : 2.99,
        category : "frappe",
        description : "coffee frappe"
    },
    {
        id : 13,
        name : "bread",
        img : "./image/bread (7).jpg",
        price : 2.99,
        category : "bread",
        description : " bread "
    },
    {
        id : 14,
        name : "egg bread",
        img : "./image/bread (8).jpg",
        price : 2.99,
        category : "bread",
        description : " bread "

    },
    {
        id : 15,
        name : "bread",
        img : "./image/bread (6).jpg",
        price : 2.99,
        category : "bread",
        description : " bread "
    },
    {
        id : 16,
        name : "bread",
        img : "./image/bread (5).jpg",
        price : 2.99,
        category : "bread",
        description : " bread "
    },
    {
        id : 17,
        name : "bread",
        img : "./image/bread (4).jpg",
        price : 2.99,
        category : "bread",
        description : " bread "
    }
    ,{
        id : 18,
        name : "Donut ",
        img : "./image/bread (3).jpg",
        price : 2.99,
        category : "bread",
        description : " bread "
    }
    ,{
        id : 19,
        name : "Donut ice",
        img : "./image/bread (2).jpg",
        price : 2.99,
        category : "bread",
        description : " bread "
    }
];

const allproducts = document.querySelector('.product-list');

function output(products){
    let html = '';
    products.forEach(p => {
        html += `
            <div class="col-lg-3 col-md-6 col-12 box">
                <div class="card mb-3">
                    <div class="card-img">
                    <img src="${p.img}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">${p.description}</p>
                        <p class=" card-text price">$${p.price}</p>
                        <a href="#" class="add">Add to cart</a>
                    </div>

                </div>
            </div>
        `;
    });
    return html;
}
function displaytohtml(products){
    allproducts.innerHTML = output(products);
}
displaytohtml(products);

// scroll to change background on navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        navbar.classList.add('fixed-top');
    }
    else{
        navbar.classList.remove('fixed-top');
    }
});

// search item
const search = document.querySelector('#search-item');
search.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
    let value = e.target.value.toLowerCase(); //input coffee

        let check = products.filter(p => p.name.toLowerCase().includes(value));
        displaytohtml(check);
    }
});

const Allproducts = document.querySelector('#all');
Allproducts.addEventListener('click', function(){
    displaytohtml(products);
});

const iconcoffe = document.querySelector('#btn-1');
iconcoffe.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'coffee'));
});

const iconbreads = document.querySelector('#btn-2');

iconbreads.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'bread'));
});

const iconmilk = document.querySelector('#btn-3');

iconmilk.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category ==='milk'));
});

const iconfood = document.querySelector('#btn-4');

iconfood.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'food'));
});

const iconfrappe = document.querySelector('#btn-5');

iconfrappe.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'frappe'));
});