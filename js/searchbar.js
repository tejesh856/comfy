export function searchbars() {
    const searchfield=document.querySelector('#search');
    searchfield.addEventListener('keyup',()=>{
        console.log(searchfield.value);
        let box=[];
        const fitems=document.querySelector('.featuring-items');
        for (let index = 1; index < fitems.children.length; index++) {
            let pname=fitems.children[index].children[1].innerHTML.toUpperCase();
            if(pname.indexOf(searchfield.value.toUpperCase())>-1){
                fitems.children[index].style='display:flex';
                
            }
            else{
                fitems.children[index].style='display:none';
            }
            box.push(fitems.children[index].style.display);
        }
        console.log(box.includes('none'));
        if(box.includes('flex')){
            fitems.nextElementSibling.style.display='none';
        }
        else{
            fitems.nextElementSibling.style.display='block';
        }        
    })
}