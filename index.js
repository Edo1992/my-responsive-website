let projectBtn=document.querySelector('.btn');
projectBtn.addEventListener('click', openProjects);

function openProjects(){
    if(screen.width>=700){
        window.scroll({top:'1100', behavior:'smooth'});
    }else{
        window.scroll({top:'2100',behavior:'smooth'});
    }
}