const myimg=document.querySelector("img");
myimg.addEventListener("click",()=>{
const mysrc=myimg.getAttribute("src");
if(mysrc==="images/image-.jpg"){
    myimg.setAttribute("src","images/bookImg2.webp");
}
else{
    myimg.setAttribute("src","images/image-.jpg");
}
})
    function myFunction(){
        let dots=document.getElementById("dots");
    let moreText=document.getElementById("more");
    let btnText =document.getElementById("mybtn");
        if(dots.style.display==="none"){
            dots.style.display="inline";
            btnText.innerHTML="Read more";
            moreText.style.display="none";
        }
        else{
    dots.style.display="none";
    btnText.innerHTML="Read less";
    moreText.style.display="inline";
        }
    }