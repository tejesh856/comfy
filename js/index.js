import { featuredjs,products } from "./featured.js";
import { interactive,alljs } from "./mains.js";
import { searchitems } from "./search.js";
import { addtocart } from "./addtocarts.js";
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
function init() {
    
    setTimeout(()=>{
        interactive();
        featuredjs(3,products);
        searchitems(products);
        const additems=document.querySelectorAll('.add-cart');
        const cart=document.querySelector('.cart');
        const cartlayer=document.querySelector('.cart-overlayer');
        const cartitems=document.querySelector('.cart-items');
        //addit(additems,cartitems,cart,cartlayer,products);
        addtocart(additems,cart,cartlayer,cartitems,products,removeitems,increament,decreament,totalcounts,totalprices);
        //removeitems(totalcounts,totalprices);
        //increament(totalcounts,totalprices);
        //decreament(totalcounts,totalprices);
        
    },2000);
    let items=JSON.parse(localStorage.getItem('items'));
    totalcounts(items);
    totalprices(items);
    alljs();
}
window.addEventListener('DOMContentLoaded',init);

/*document.onreadystatechange=function(){
    if(document.readyState==='complete'){
        console.log('clicked');
        const removebtn=document.querySelectorAll('.item-content button');
        console.log(removebtn);
        removebtn.forEach(remove=>{
            remove.addEventListener('click',()=>{
                console.log(remove);
            })
        })
    }
}*/

