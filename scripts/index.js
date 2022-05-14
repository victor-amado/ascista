
window.onload = ()=>{
    const quoteBtn = document.getElementById("cotizar-btn");
    const hamMenu = document.getElementById("ham-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const whatsAppBtn = document.querySelector(".floating-btn");
    const form = document.querySelector("form");
    const cardContainer = document.querySelector(".card-container");

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


   //Renderizar los productos desde el json local de acuerdo a sus categorías
  
  let categoryElements = document.querySelectorAll(".main-info h3");
  const pathjson = "scripts/products.json"
    async function fetchProducts(path, categ="all") {
      try {
        const res = await fetch(path);
        let data = await res.json();
        renderProducts(data, categ); 
      } catch (e) {
        console.log(e);
      }
    }


    function renderProducts(list, categ){
      let newList = []
      cardContainer.innerHTML = null
      if(categ != "all") {
        newList = list.filter(element=> element.category == `${categ}`)
      } else {
        newList = list
      }  
      newList.forEach(element => {
          cardContainer.innerHTML+=`
          <div class="card">
            <img src=${element.image} alt="element.description" />
            <h4>${element.name}</h4>
            <p>${element.description}</p>
          </div>`

      });
    }


    fetchProducts(pathjson)
    console.log(categoryElements)

   categoryElements.forEach(element=>{
     element.addEventListener("click", (e)=>{
        e.preventDefault()
        fetchProducts(pathjson, element.id);
     })
   })

  }

