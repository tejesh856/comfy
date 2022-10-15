export function addtocartbtn(cartitems,cart,cartlayer,removeitems,increament,decreament,totalcounts,totalprices) {
    const addbtn=document.querySelector('.item-abouts button');
    //console.log(document.querySelector('.item-abouts'));
    addbtn.addEventListener('click',()=>{
        let items=JSON.parse(localStorage.getItem('items'));
        let carts=JSON.parse(localStorage.getItem('cart-items'));
        let infos=JSON.parse(localStorage.getItem('info'));
        if(items.find(function(i){
            return i.title.toUpperCase()===addbtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toUpperCase();
        })){
            items.find(function(i){
                return i.title.toUpperCase()===addbtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toUpperCase();
            }).count++;
            carts[items.findIndex(function(i){
                return i.title.toUpperCase()===addbtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toUpperCase();
            })]=`<div class="cart-item">
            <div class="item-detail">
                <div class="item-img"><img src=${items.find(function(i){
                    return i.title.toUpperCase()===addbtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toUpperCase();
                }).image} alt="cart-item-1"></div>
                <div class="item-content">
                    <div class="item-info">
                        <div class="item-name">${items.find(function(i){
                            return i.title.toUpperCase()===addbtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toUpperCase();
                        }).title}</div>
                        <div class="item-price">${items.find(function(i){
                            return i.title.toUpperCase()===addbtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toUpperCase();
                        }).price}</div>
                    </div>
                    <button>remove</button>
                </div>
            </div>
            <div class="number">
                <div class="increament"><i class="fa-solid fa-angle-up"></i></div>
                <div class="count">${items.find(function(i){
                    return i.title.toUpperCase()===addbtn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.toUpperCase();
                }).count}</div>
                <div class="decreament"><i class="fa-solid fa-angle-down"></i></div>
            </div>
            </div>`;
            totalcounts(items);
            totalprices(items);
            localStorage.setItem('items',JSON.stringify(items));
            localStorage.setItem('cart-items',JSON.stringify(carts));
        }
        else{
            infos[0].count=1;
            items.push(infos[0]);
            carts.push(`<div class="cart-item">
            <div class="item-detail">
                <div class="item-img"><img src=${infos[0].image} alt="cart-item-1"></div>
                <div class="item-content">
                    <div class="item-info">
                        <div class="item-name">${infos[0].title}</div>
                        <div class="item-price">${infos[0].price}</div>
                    </div>
                    <button>remove</button>
                </div>
            </div>
            <div class="number">
                <div class="increament"><i class="fa-solid fa-angle-up"></i></div>
                <div class="count">${infos[0].count}</div>
                <div class="decreament"><i class="fa-solid fa-angle-down"></i></div>
            </div>
            </div>`);
            totalcounts(items);
            totalprices(items);
            localStorage.setItem('items',JSON.stringify(items));
            localStorage.setItem('cart-items',JSON.stringify(carts));

        }
        cartitems.innerHTML=JSON.parse(localStorage.getItem('cart-items')).join('');
        cart.classList.add('slide');
        cartlayer.classList.add('close');
        removeitems(totalcounts,totalprices);
        increament(totalcounts,totalprices);
        decreament(totalcounts,totalprices);
    })
    cartitems.innerHTML=JSON.parse(localStorage.getItem('cart-items')).join('');

}