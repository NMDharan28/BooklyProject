//selecting btn, overlay, popup

var btn = document.getElementById("addpopup")
var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")

btn.addEventListener("click", function(){
    overlay.style.display="block"
    popup.style.display ="block"
})

// selecting cancel button to remove its default submit function

var closee= document.getElementById("cancelpopup")
closee.addEventListener("click", function(event){
event.preventDefault()
overlay.style.display="none"
popup.style.display ="none"
})

//selecting  main container,book-title-input,book-authon-input,book-description-title

var container=document.querySelector(".container")
var inputbook=document.getElementById("book-title-input")
var inputauthor=document.getElementById("book-authon-input")
var inputdesc=document.getElementById("book-description-title")
var addbook=document.getElementById("addbook")

addbook.addEventListener("click",function(event){
event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","bookcontainer")
div.innerHTML=`<h2>${inputbook.value}</h2>
<h5>${inputauthor.value}</h5>
<p>${inputdesc.value}</p>
<button onclick='deletebook(event)'>Delete</button>`
container.append(div)
overlay.style.display="none"
popup.style.display ="none"


})

function deletebook(event) 
{
    event.target.parentElement.remove()
    // we also can use closseet for parentElement

}


