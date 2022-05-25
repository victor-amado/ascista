

   //Renderizar los productos desde el json local de acuerdo a sus categorías
  
  let categoryElements = document.querySelectorAll(".main-info h3");
  const cardContainer = document.querySelector(".card-container");

  const pathjson =  "https://victor-amado.github.io/ascista/scripts/products.json"
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
            <img src=${element.image} alt="${element.description}" />
            <h4>${element.name}</h4>
            <p>${element.description}</p>
          </div>`

      });
    }


    fetchProducts(pathjson)

   categoryElements.forEach(element=>{
     element.addEventListener("click", (e)=>{
        e.preventDefault()
        fetchProducts(pathjson, element.id);
     })
   })

  

