window.onload = ()=>{
const quoteBtn = document.getElementById("cotizar-btn");
const hamMenu = document.getElementById("ham-menu");
const mobileMenu = document.querySelector(".mobile-menu");


quoteBtn.addEventListener("click", ()=>{
    window.open("https://forms.gle/LmhLaJ8j6qCdNiaH8", '_blank');
})


hamMenu.addEventListener("click", ()=>{
   mobileMenu.classList.remove("hide");
})

}
