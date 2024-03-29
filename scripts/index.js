
window.onload = ()=>{
    const quoteBtn = document.getElementById("cotizar-btn");
    const hamMenu = document.getElementById("ham-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const whatsAppBtn = document.querySelector(".floating-btn");
    const form = document.querySelector("form");
    

    whatsAppBtn.addEventListener("click", ()=>{
        window.open("https://wa.me/message/VFFGNZBZIAG6M1", "_blank");
    })

    if (quoteBtn) {
      quoteBtn.addEventListener("click", () => {
        window.open("https://forms.gle/LmhLaJ8j6qCdNiaH8", "_blank");
      });
    }


   document.addEventListener("click", evt => {
     let targetEl = evt.target; // clicked element
     do {
       if (targetEl == hamMenu) {
         // This is a click inside, shows menu
          mobileMenu.classList.remove("hide");
         return;
       }
       // Go up the DOM
       targetEl = targetEl.parentNode;
     } while (targetEl);
     // This is a click outside.
      mobileMenu.classList.add("hide");
   });

   if(form){
      form.addEventListener("submit", ()=>{
        swal("¡Gracias!", "Pronto responderemos tu mensaje", "success");
      })
   }

  }

