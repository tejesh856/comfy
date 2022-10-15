export const products=[
    {title:'high-back bench',price:'9.99',company:'ikea',image:'feat-item-1.jpg'},
    {title:'utopia sofa',price:'39.95',company:'marcos',image:'feat-item-2.jpg'},
    {title:'entertainment center',price:'29.98',company:'liddy',image:'feat-item-3.jpg'},
    {title:'albany table',price:'79.99',company:'marcos',image:'feat-item-4.jpg'},
    {title:'accent chair',price:'25.99',company:'caressa',image:'feat-item-5.jpg'},
    {title:'wooden table',price:'45.99',company:'caressa',image:'feat-item-6.jpg'},
    {title:'dining table',price:'6.99',company:'caressa',image:'feat-item-7.jpg'},
    {title:'sofa set',price:'69.99',company:'liddy',image:'feat-item-8.jpg'},
    {title:'modern bookshelf',price:'8.99',company:'marcos',image:'feat-item-9.jpg'},
    {title:'emperor bed',price:'21.99',company:'liddy',image:'feat-item-10.jpg'},
    {title:'albany sectional',price:'10.99',company:'ikea',image:'feat-item-11.jpg'},
    {title:'leather sofa',price:'9.99',company:'liddy',image:'feat-item-12.jpg'},
];
export function featuredjs(length,products) {
    const fitems=document.querySelector('.featuring-items');
    const preloader=document.querySelector('.prelayer');
    if(fitems){
        for (let index = 0; index <length; index++) {
            fitems.innerHTML+=`<div class="featuring-item-1">
            <div class="item-img">
            <img src=${products[index].image} alt="item-img">
            <div class="img-icon">
                <div class="search"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div class="add-cart"><i class="fa-solid fa-cart-shopping"></i></div>
            </div>
            </div>
            <div class="title">${products[index].title}</div>
            <div class="price">$${products[index].price}</div>
            </div>`;
        }
        //console.log('hello');
        if(location.pathname==='/comfy/index.html' || location.pathname==='/comfy/'){
            fitems.children[0].classList.remove('block');
            fitems.classList.remove('repeat');
        }
        else{
            preloader.style='display:none';
            document.body.style='overflow-y:auto';
        }
        //console.log('bye');
    }
}