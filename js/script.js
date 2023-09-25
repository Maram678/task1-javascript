var allProducts=document.querySelectorAll(".sec5-items .p1")
var btn=document.querySelector(".btn")
var whatclickedon=document.querySelector(".whatclickedon")
var p=document.querySelector(".p1")
var btn2=document.querySelector(".btn2")
var totalPrice=0;



var displaydiv=document.querySelector(".displaydiv")
allProducts.forEach(function (item){
    item.onclick = function (){
        whatclickedon.innerHTML += item.textContent+"<br>"
        totalPrice +=  +(item.getAttribute("price"))

        if(whatclickedon!="")
        {btn2.style.display="block"}
    }
    


})

allProducts.forEach(function (item){
    btn2.onclick = function (){
        displaydiv.innerHTML = totalPrice+"$" ;
    }
    


})


        








