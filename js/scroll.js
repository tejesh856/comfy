export function scrolls() {
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset>227){
            document.querySelector('.filter').style='position:fixed; top:4rem;';
            document.querySelector('.filter').nextElementSibling.style='left:262px;';
        }
        else{
            document.querySelector('.filter').style='position:relative';
            document.querySelector('.filter').nextElementSibling.style='left:0px;';

        }
    })
}