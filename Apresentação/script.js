//Buttons
const ForEach = document.getElementById("ForEach");
const Map = document.getElementById("Map");
const Reduce = document.getElementById("Reduce");
const Filter = document.getElementById("Filter");

const lowPrice = 0.10

const list = document.getElementById("lista");
let myLi = ``

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

Map.addEventListener("click", Desconto => {
}
)

const Desconto10 = menuOptions.map(Descont => {return Descont.price * lowPrice  });
console.log(Desconto10);












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



