export function itemcomplete() {
    const wrapper=document.querySelector('.wrappers');
    const cartitems=document.querySelector('.cart-items');
    const head=document.querySelector('.section h4');
    const preloader=document.querySelector('.prelayer');
    if(location.pathname==='/comfy/item-page.html'){
        preloader.style='display:none';
        document.body.style='overflow-y:auto';
    }
    if(wrapper){
        let info=JSON.parse(localStorage.getItem('info'));
        wrapper.innerHTML=`<div class="item-images"><img src=${info[0].image} alt="item-img"></div>
        <div class="item-abouts">
        <div class="item-titles">${info[0].title}</div>
        <div class="item-companys">By ${info[0].company}</div>
        <div class="item-prices">${info[0].price}</div>
        <div class="colors">
            <span></span>
            <span></span>
        </div>
        <div class="item-infos">
            <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
        </div>
        <button>add to cart</button>
        </div>`;
        head.innerHTML=`Home / ${info[0].title}`;
    }
    cartitems.innerHTML=JSON.parse(localStorage.getItem('cart-items')).join('');
}