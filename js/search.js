export function searchitems(products) {
    const searchitem=document.querySelectorAll('.search');
    if(searchitem){
        let info=[];
        searchitem.forEach(sear=>{
            sear.addEventListener('click',()=>{
                let items=JSON.parse(localStorage.getItem('items'));
                let info_item={};
                info_item.image=sear.parentElement.previousElementSibling.src;
                info_item.title=sear.parentElement.parentElement.nextElementSibling.innerHTML;
                info_item.price=sear.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML;
                info_item.company=products.filter(function(value) {
                    return info_item.title.toUpperCase()===value.title.toUpperCase()
                })[0].company;
                if(items.find(function(i){
                    return i.title.toUpperCase()===info_item.title;
                })){
                    info_item.count=items.find(function(i){
                        return i.title.toUpperCase()===info_item.title;
                    }).count;
                }
                else{
                    info_item.count=0;
                }
                info.push(info_item);
                localStorage.setItem('info',JSON.stringify(info));
                location.assign('item-page.html');
            })
        })
    }
}