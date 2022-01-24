let nav=document.querySelector(".navigation");
let btn=document.querySelector(".menu-line");

function ShowHide()
{
    if(nav.style.display!="none")
    {
        nav.style.display="none";
        
    }
    else
    {
        nav.style.display="flex";
    }
}
btn.addEventListener("click",ShowHide);