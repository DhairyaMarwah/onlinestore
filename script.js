let menuitems=document.getElementById("menuitems")

menuitems.style.maxHeight="0px"


function menutoggle(){
    if(menuitems.style.maxHeight=="0px")
    {
        menuitems.style.maxHeight="200px"
    }
    else{
        menuitems.style.maxHeight="0px"
    }
}




// -----Product Gallery---

let productImg = document.getElementById("productImg")
let smallImg =document.getElementsByClassName("small-img")

smallImg[0].onclick=function(){
    productImg.src=smallImg[0].src
}
smallImg[1].onclick=function(){
    productImg.src=smallImg[1].src
}
smallImg[2].onclick=function(){
    productImg.src=smallImg[2].src
}
smallImg[3].onclick=function(){
    productImg.src=smallImg[3].src
}





// Form 

// let loginform=document.getElementById("loginform")
// let regform=document.getElementById("regform")
// let indicator=document.getElementById("indicator")

// function register(){
//     regform.style.transform="translateX(0px)"
//     loginform.style.transform="translateX(0px)"
// }
// function login(){
//     regform.style.transform="translateX(300px)"
//     loginform.style.transform="translateX(300px)"
// }


