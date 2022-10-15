export function decreament(totalcounts,totalprices) {
    const decreasebtn=document.querySelectorAll('.decreament');
    decreasebtn.forEach(dbtn=>{
        dbtn.addEventListener('click',()=>{
            //console.log(dbtn);
            let items=JSON.parse(localStorage.getItem('items'));
            let carts=JSON.parse(localStorage.getItem('cart-items'));
            if(items.find(function(i){
                return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
            })){
                if(items.find(function(i){
                    return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                }).count>1){
                    items.find(function(i){
                        return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                    }).count--;
                    carts[items.findIndex(function(i){
                        return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                    })]=`<div class="cart-item">
                    <div class="item-detail">
                        <div class="item-img"><img src=${items.find(function(i){
                            return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                        }).image} alt="cart-item-1"></div>
                        <div class="item-content">
                            <div class="item-info">
                                <div class="item-name">${items.find(function(i){
                                    return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                                }).title}</div>
                                <div class="item-price">${items.find(function(i){
                                    return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                                }).price}</div>
                            </div>
                            <button>remove</button>
                        </div>
                    </div>
                    <div class="number">
                        <div class="increament"><i class="fa-solid fa-angle-up"></i></div>
                        <div class="count">${items.find(function(i){
                            return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                        }).count}</div>
                        <div class="decreament"><i class="fa-solid fa-angle-down"></i></div>
                    </div>
                    </div>`;
                    totalcounts(items);
                    totalprices(items);
                    localStorage.setItem('items',JSON.stringify(items));
                    localStorage.setItem('cart-items',JSON.stringify(carts));
                    dbtn.previousElementSibling.innerHTML=`${items.find(function(i){
                        return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                    }).count}`;
                }
                else if(items.find(function(i){
                    return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                }).count===1){
                    if(items.length>1){
                        carts.splice(items.findIndex(function(i){
                            return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                        }),1);
                        items.splice(items.findIndex(function(i){
                            return i.title.toUpperCase()===dbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                        }),1);
                        totalcounts(items);
                        totalprices(items);
                        localStorage.setItem('items',JSON.stringify(items));
                        localStorage.setItem('cart-items',JSON.stringify(carts));
                        dbtn.parentElement.parentElement.remove();
                    }
                    else if(items.length===1){
                        carts.shift();
                        items.shift();
                        totalcounts(items);
                        totalprices(items);
                        localStorage.setItem('items',JSON.stringify(items));
                        localStorage.setItem('cart-items',JSON.stringify(carts));
                        dbtn.parentElement.parentElement.remove();
                    }
                }
            }
        })
    })
}