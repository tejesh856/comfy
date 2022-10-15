
/*function complete() {
    
    featuredjs(3,products);
    searchitems(products);
    //const additems=document.querySelectorAll('.add-cart');
    //const cartitems=document.querySelector('.cart-items');
    //const cart=document.querySelector('.cart');
    //const cartlayer=document.querySelector('.cart-overlayer');
    //addtocarts(additems,cartitems,cart,cartlayer,products);
}*/
export function interactive() {
    const fitems= document.querySelector('.featuring-items');
    const preloader=document.querySelector('.prelayer');
    const titless=document.querySelector('title');
    if(location.pathname==='/comfy/index.html' || location.pathname==='/comfy/'){
        if(fitems){
            fitems.classList.add('repeat');
            fitems.children[0].classList.add('block');
        }
    }
    //else{
        //preloader.style='display:block';
        //document.body.style='overflow-y:hidden';
        //if(location.pathname==='/item-page.html'){
            //titless.innerHTML=`${inf[0].title.toUpperCase()} | Comfy`;
        //}
    //}    
}
export function alljs(){
    const shopcarticon=document.querySelector('.icon');
    const cart=document.querySelector('.cart');
    const cartlayer=document.querySelector('.cart-overlayer');
    const cross=document.querySelector('.cart-box-1 .cross');
    const pbtn=document.querySelector('.products');
    const allbtn=document.querySelector('.all');
    let btns=[allbtn,pbtn];
    if(pbtn && allbtn){
        btns.forEach(btn => {
            btn.addEventListener('click',()=>{
                location.assign('products.html');
            })
        })
    }
    shopcarticon.addEventListener('click',()=>{
        cart.classList.add('slide');
        cartlayer.classList.add('close');
    })
    cross.addEventListener('click',()=>{
        cart.classList.remove('slide');
        cartlayer.classList.remove('close');
    })
    //const cartitems=document.querySelector('.cart-items');
    //console.log(cartitems.children);
    
    
}
