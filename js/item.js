import { itemcomplete } from "./items.js";
import { products } from "./featured.js";
import { alljs,interactive } from "./mains.js";
import { addtocartbtn } from "./searchitemaddtocart.js";
import { removeitems } from "./removeitem.js";
import { increament } from "./increaments.js";
import { decreament } from "./decreaments.js";
import { totalcounts } from "./totalcount.js";
import { totalprices } from "./totalprice.js";
/*document.addEventListener('DOMContentLoaded',()=>{
    interactive();
    featuredjs(3,products);
    alljs();
    searchitems(products);
    const additems=document.querySelectorAll('.add-cart');
    addtocart(additems,cart,cartlayer,products);
    /*const cartsitems=document.querySelector('.cart-items');
    setTimeout(()=>{
        for (let index = 0; index < cartsitems.children.length; index++) {
            console.log(cartsitems.children[index].children[0].children[1].children[1]);
            cartsitems.children[index].children[0].children[1].children[1].addEventListener('click',(e)=>{
                console.log(e.target);
            })
        }
    },3000);
})*/
function itempage() {
    //interactive();
    setTimeout(()=>{
        itemcomplete();
        alljs();
        const cart=document.querySelector('.cart');
        const cartlayer=document.querySelector('.cart-overlayer');
        const cartitems=document.querySelector('.cart-items');
        addtocartbtn(cartitems,cart,cartlayer,removeitems,increament,decreament,totalcounts,totalprices);
        removeitems(totalcounts,totalprices);
        increament(totalcounts,totalprices);
        decreament(totalcounts,totalprices);
        let items=JSON.parse(localStorage.getItem('items'));
        totalcounts(items);
        totalprices(items);
    },2000);
}
window.addEventListener('DOMContentLoaded',itempage);