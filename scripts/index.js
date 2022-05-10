window.onload = ()=>{
    const quoteBtn = document.getElementById("cotizar-btn");
    const hamMenu = document.getElementById("ham-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const whatsAppBtn = document.querySelector(".floating-btn");

    hamMenu.addEventListener("click", ()=>{
    mobileMenu.classList.remove("hide");
    })

    whatsAppBtn.addEventListener("click", ()=>{
        window.open("https:wa.me/message/VFFGNZBZIAG6M1", "_blank");
    })

    if (quoteBtn) {
      quoteBtn.addEventListener("click", () => {
        window.open("https://forms.gle/LmhLaJ8j6qCdNiaH8", "_blank");
      });
    }

}
