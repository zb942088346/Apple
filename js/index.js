window.onload=function () {
    let lits=document.querySelectorAll(".min ul li")[0];
    let search=document.querySelector(".search");
    lits.onclick=function () {
        search.style.height="100%";
    }
    let search_left=document.querySelector(".search_top .left");
    search_left.onclick=function () {
        search.style.height="0";
    }
    let bag=document.querySelectorAll(".min ul li")[2];
    let shoppingbag=document.querySelector(".shoppingbag");
    bag.onclick=function () {
        shoppingbag.style.display="block"
    }
}