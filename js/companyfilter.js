export function companys(products,featuredjs) {
    const companyslist=document.querySelectorAll('#company li');
    const fitems=document.querySelector('.featuring-items');
    for (let index = 0; index < companyslist.length; index++) {
        if (index>0) {
            companyslist[index].addEventListener('click',()=>{
                
                let cfilter=products.filter(function(i){
                    return i.company.toUpperCase()===companyslist[index].innerHTML.toUpperCase();
                })
                for (let inde = 1; inde < fitems.children.length; inde++) {
                    fitems.children[inde].style='display:none';                
                }

                for (let index = 0; index < cfilter.length; index++){
                    for (let inde = 1; inde < fitems.children.length; inde++) {
                        if(cfilter[index].title.toUpperCase()===fitems.children[inde].children[1].innerHTML.toUpperCase()){
                            fitems.children[inde].style='display:flex';
                        }
                    }
                }
            })
        }
        else{
            companyslist[0].addEventListener('click',()=>{
                for (let index = 1; index < fitems.children.length; index++) {
                    fitems.children[index].style='display:flex';                    
                }
            })
        }
    }
    

}