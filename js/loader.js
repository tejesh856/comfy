function load() {
    //console.log('load');
    const preloader=document.querySelector('.prelayer');
    const titless=document.querySelector('title');
    let inf=JSON.parse(localStorage.getItem('info'));
    //console.log(preloader);
    preloader.style='display:block';
    document.body.style='overflow-y:hidden';
    if(location.pathname==='/comfy/item-page.html'){
        titless.innerHTML=`${inf[0].title.toUpperCase()} | Comfy`;
    }
}
document.onreadystatechange=function(){
    if (document.readyState==='interactive') {
        load();
    }
}