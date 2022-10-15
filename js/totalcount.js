export function totalcounts(items) {
    let c=0;
    for (let index = 0; index < items.length; index++) {
        c+=items[index].count;               
    }
    document.querySelector('.num').innerHTML=`${c}`;
}