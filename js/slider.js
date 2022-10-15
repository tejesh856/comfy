export function sliders() {
    const range=document.querySelector('#price');
    range.nextElementSibling.innerHTML=`value : $${range.value}`;
    range.addEventListener('input',()=>{
        range.nextElementSibling.innerHTML=`value : $${range.value}`;
        const fitems=document.querySelector('.featuring-items');
        let boxs=[];
        for (let index = 1; index < fitems.children.length; index++) {
           let price=parseFloat(fitems.children[index].children[2].innerHTML.slice(1,fitems.children[index].children[2].innerHTML.length));
           if(price<=range.value){
            fitems.children[index].style='display:flex';
           }
           else{
            fitems.children[index].style='display:none';
           }
           boxs.push(fitems.children[index].display);           
        }
        if(range.value>0){
            fitems.nextElementSibling.style.display='none';
        }
        else{
            fitems.nextElementSibling.style.display='block';
        }
    })
}