export function totalprices(items) {
    let t=0;
    for (let index = 0; index < items.length; index++) {
            t+=parseFloat(items[index].price.slice(1,items[index].price.length))*items[index].count;    
    }
    //console.log(t);
    document.querySelector('.total').innerHTML=`$${t.toFixed(2)}`;
}