export function addtocart(additems,cart,cartlayer,cartitems,products,removeitems,increament,decreament,totalcounts,totalprices) {
    //console.log(products);
    if(additems){
        let items;
        let carts;
        if(!JSON.parse(localStorage.getItem('items'))){
            items=[];
        }
        else{
            items=JSON.parse(localStorage.getItem('items'));
        }
        if(!JSON.parse(localStorage.getItem('cart-items'))){
            carts=[];
        }
        else{
            carts=JSON.parse(localStorage.getItem('cart-items'));
        }        
        additems.forEach(ad => {
            ad.addEventListener('click',()=>{
                if(JSON.parse(localStorage.getItem('items')).length>0){
                    items=JSON.parse(localStorage.getItem('items'));
                }
                else{
                    items=[];
                }
                if(JSON.parse(localStorage.getItem('items')).carts>0){
                    carts=JSON.parse(localStorage.getItem('items'));
                }
                else{
                    carts=[];
                }
                //console.log(items);
                let item={};
                if(items.find(function(i){
                    return i.title.toUpperCase()===ad.parentElement.parentElement.nextElementSibling.innerHTML.toUpperCase();
                })){
                    items.find(function(i){
                        return i.title.toUpperCase()===ad.parentElement.parentElement.nextElementSibling.innerHTML.toUpperCase();
                    }).count++;  
                    console.log(items.find(function(i){
                        return i.title.toUpperCase()===ad.parentElement.parentElement.nextElementSibling.innerHTML.toUpperCase();
                    }).count);
                    console.log(items.find(function(i){
                        return i.title.toUpperCase()===ad.parentElement.parentElement.nextElementSibling.innerHTML.toUpperCase();
                    }));
                }
                else{
                    item.title=ad.parentElement.parentElement.nextElementSibling.innerHTML;
                    item.image=ad.parentElement.previousElementSibling.src;
                    item.count=1;
                    item.company=products.filter(function(val) {
                        return val.title.toUpperCase()===item.title.toUpperCase();
                    })[0].company;
                    item.price=ad.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML;
                    items.push(item);
                }
                carts=[];
                for (let index = 0; index < items.length; index++) {
                    carts.push(`<div class="cart-item">
                    <div class="item-detail">
                        <div class="item-img"><img src=${items[index].image} alt="cart-item-1"></div>
                        <div class="item-content">
                            <div class="item-info">
                                <div class="item-name">${items[index].title}</div>
                                <div class="item-price">${items[index].price}</div>
                            </div>
                            <button>remove</button>
                        </div>
                    </div>
                    <div class="number">
                        <div class="increament"><i class="fa-solid fa-angle-up"></i></div>
                        <div class="count">${items[index].count}</div>
                        <div class="decreament"><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                </div>`);                    
                }
                totalcounts(items);
                totalprices(items);
                localStorage.setItem('items',JSON.stringify(items));
                localStorage.setItem('cart-items',JSON.stringify(carts));
                //cartitems.innerHTML=JSON.parse(localStorage.getItem('cart-items')).join('');
                //location.reload();
                cartitems.innerHTML=JSON.parse(localStorage.getItem('cart-items')).join('');
                cart.classList.add('slide');
                cartlayer.classList.add('close');
                //console.log(items);
                removeitems(totalcounts,totalprices);
                increament(totalcounts,totalprices);
                decreament(totalcounts,totalprices);
            })
            
        })
        totalcounts(items);
        totalprices(items);
        localStorage.setItem('items',JSON.stringify(items));
        localStorage.setItem('cart-items',JSON.stringify(carts));
        cartitems.innerHTML=JSON.parse(localStorage.getItem('cart-items')).join('');        
        //cartitems.innerHTML=JSON.parse(localStorage.getItem('cart-items')).join('');
        //localStorage.setItem('items'.JSON.stringify(items));
    }
    
}