export function removeitems(totalcounts,totalprices){
    const removebtn=document.querySelectorAll('.item-content button');
    //let items=JSON.parse(localStorage.getItem('items'));
    //let carts=JSON.parse(localStorage.getItem('cart-items'));
    removebtn.forEach(remove=>{
        remove.addEventListener('click',()=>{
            let items=JSON.parse(localStorage.getItem('items'));
            let carts=JSON.parse(localStorage.getItem('cart-items'));
            //console.log(remove);
            //console.log(items);
            
            //console.log(typeof carts[0]);
            if(items.find(function(i){
                return remove.previousElementSibling.children[0].innerHTML.toUpperCase()===i.title.toUpperCase();
            })){
                /*console.log(items.findIndex(function(i){
                    return remove.previousElementSibling.children[0].innerHTML.toUpperCase()===i.title.toUpperCase();
                }));*/
                if(items.findIndex(function(i){
                    return remove.previousElementSibling.children[0].innerHTML.toUpperCase()===i.title.toUpperCase();
                })>0){
                    carts.splice(items.findIndex(function(i){
                        return remove.previousElementSibling.children[0].innerHTML.toUpperCase()===i.title.toUpperCase();
                    }),1);
                    items.splice(items.findIndex(function(i){
                        return remove.previousElementSibling.children[0].innerHTML.toUpperCase()===i.title.toUpperCase();
                    }),1);
                    //console.log(items);
                    totalcounts(items);
                    totalprices(items);
                    localStorage.setItem('items',JSON.stringify(items));
                    localStorage.setItem('cart-items',JSON.stringify(carts));
                    remove.parentElement.parentElement.parentElement.remove();
                }
                else if(items.findIndex(function(i){
                    return remove.previousElementSibling.children[0].innerHTML.toUpperCase()===i.title.toUpperCase();
                })===0){
                    carts.shift();
                    items.shift();
                    totalcounts(items);
                    totalprices(items);
                    //console.log(items);
                    localStorage.setItem('items',JSON.stringify(items));
                    localStorage.setItem('cart-items',JSON.stringify(carts));
                    remove.parentElement.parentElement.parentElement.remove();
                }                
                
            }
        })
    })
}