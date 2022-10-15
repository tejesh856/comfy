export function increament(totalcounts,totalprices) {
    const increasebtn=document.querySelectorAll('.increament');
    increasebtn.forEach(inbtn=>{
        inbtn.addEventListener('click',()=>{
            //console.log(inbtn);
            let items=JSON.parse(localStorage.getItem('items'));
            let carts=JSON.parse(localStorage.getItem('cart-items'));
            if(items.find(function(i){
                return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
            })){
                items.find(function(i){
                    return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                }).count++;
                carts[items.findIndex(function(i){
                    return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                })]=`<div class="cart-item">
                <div class="item-detail">
                    <div class="item-img"><img src=${items.find(function(i){
                        return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                    }).image} alt="cart-item-1"></div>
                    <div class="item-content">
                        <div class="item-info">
                            <div class="item-name">${items.find(function(i){
                                return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                            }).title}</div>
                            <div class="item-price">${items.find(function(i){
                                return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                            }).price}</div>
                        </div>
                        <button>remove</button>
                    </div>
                </div>
                <div class="number">
                    <div class="increament"><i class="fa-solid fa-angle-up"></i></div>
                    <div class="count">${items.find(function(i){
                        return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                    }).count}</div>
                    <div class="decreament"><i class="fa-solid fa-angle-down"></i></div>
                </div>
                </div>`;
                inbtn.nextElementSibling.innerHTML=`${items.find(function(i){
                    return i.title.toUpperCase()===inbtn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML.toUpperCase();
                }).count}`;
                totalcounts(items);
                totalprices(items);
                localStorage.setItem('items',JSON.stringify(items));
                localStorage.setItem('cart-items',JSON.stringify(carts));
            }
        })
    })
}