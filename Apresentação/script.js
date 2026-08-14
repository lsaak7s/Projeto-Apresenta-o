//Buttons
const ForEach = document.getElementById("ForEach");
const Map = document.getElementById("Map");
const Reduce = document.getElementById("Reduce");
const Filter = document.getElementById("Filter");
//Valores
const list = document.getElementById("lista");
const lowPrice = 0.90
let myLi = ``
//Mostrar Tudo
ForEach.addEventListener("click", Cardapio => { }
)

menuOptions.forEach((produt) => {
  myLi +=

    `
  <li>
   <img class="Escolha" src=${produt.src}>
   <p class="myEscolha">${produt.name}</p>
   <p class="price"> R$ ${produt.price},00</p>
  </li>
 `
})
list.innerHTML = myLi
//Mapear e dar o desconto
Map.addEventListener("click", mapAll)

const price = menuOptions.map(price => { return price.price })

const number = price.map(price => { return price * lowPrice })

function mapAll() {
  const newArray = menuOptions.map((produtos) => ({
    ...produtos,
    price: produtos.price * lowPrice
  }))
}















//console.log(Desconto10);

/* jeito  bruto
function Produtos() {
    list.innerHTML = `
    <li>
     <img id="Escolhas" class="Escolha" src="./img/xbacon.png">
     <p id="myEscolhas" class="myEscolha">X Bacon</p>
     <p id="sale" class="price"> R$ 34,00 </p>
    </li>
    <li>
     <img id="Escolhas" class="Escolha" src="./img/monstruoso-vegan.png">
     <p id="myEscolhas" class="myEscolha"> Mostruoso vegan</p>
     <p id="sale" class="price"> R$ 45,00 </p>
    </li>
    <li>
     <img id="Escolhas" class="Escolha" src="./img/monstruoso.png">
     <p id="myEscolhas" class="myEscolha"> Monstruoso</p>
     <p id="sale" class="price"> R$ 50,00 </p>
    </li>
    <li>
     <img id="Escolhas" class="Escolha" src="./img/bacon-egg.png">
     <p id="myEscolhas" class="myEscolha"> Bacon egg</p>
     <p id="sale" class="price"> R$ 39,00 </p>
    </li>
    <li>
     <img id="Escolhas" class="Escolha" src="./img/xsalada.jpeg">
     <p id="myEscolhas" class="myEscolha"> X Salada</p>
     <p id="sale" class="price"> R$ 30,00 </p>
    </li>
    <li>
     <img id="Escolhas" class="Escolha" src="./img/xvegan.png">
     <p id="myEscolhas" class="myEscolha"> X Vegan</p>
     <p id="sale" class="price"> R$ 45,00 </p>  
    </li>
  `
}

*/



