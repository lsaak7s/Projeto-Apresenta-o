//Buttons
const ForEach = document.getElementById("ForEach");
const Map = document.getElementById("Map");
const Reduce = document.getElementById("Reduce");
const Filter = document.getElementById("Filter");

//Visão
ForEach.addEventListener("click", () => Cardapio(menuOptions)) /*Para Fazer com que addEventListener Nao chame a função assim que carregar e preciso usar uma função Void, para que assim ele espere o button ser apertado */
Map.addEventListener("click", mapAll)
Reduce.addEventListener("click", Total)
Filter.addEventListener("click", Filtrar)

//Valores
const list = document.getElementById("lista");
const Desconto = document.getElementById("Desconto");
const lowPrice = 0.90

//Mapear e dar o desconto
function mapAll() {
  //Aqui ele mapeou os numeros e aplicou os valores
  const pric = menuOptions.map(All => ({
    //Spred operantor, com isso conseguimos ir direto ao ponto sobre oque podemos alterar 
    ...All,
    //Aqui dizemos desde o inicio oque queremos
    price: All.price * lowPrice,

  }));
  Cardapio(pric)

}
//Mostrar Tudo
function Cardapio(pric)/*Aqui ela usar o parametro porque o Array não vem mais dela*/ {
  //Aqui quardamos o cardapio
  let myLi = ``
  pric.forEach((produt) => {
    /*Aqui o forEach vai pecorrer o Array adicionalas, so que precisamos dizer para myLi se sim ou não então por isso do + ele vai montando e adicionando*/
    myLi +=
      `
  <li class="iteis">
   <img class="Imagem" src=${produt.src}>
   <p class="myEscolha">${produt.name}</p>
   <p class="price"> R$ ${produt.price}</p>
  </li>
 `
  });
  list.innerHTML = myLi
}
//Calcular Tudo
function Total() {
  //Com desconto
  const value = menuOptions.reduce((acc, price) => {
    return acc + price.price;
  }, 0);
  //Sem desconto
  const valueLow = menuOptions.reduce((acc, price) => {
    return acc + price.price * lowPrice;
  }, 0);
  Desconto.innerHTML = ` Valor sem desconto R$:${value} <br> 
 Valor com desconto via Pix R$:${valueLow}`

}
//Filtra Veganos
function Filtrar() {
  //Aqui eu apenas peguei os valores de vegan que eram true
  const filter = menuOptions.filter(filter => filter.vegan === true);
  //Aqui ele guarda oque já colocamos na tela
  let myLi = ``
  //O nosso motor que vai pecorrer o nosso array
  filter.forEach((produt) => {
    /*Aqui o forEach vai pecorrer o Array adicionalas, so que precisamos dizer para myLi se sim ou não então por isso do + ele vai montando e adicionando*/
    myLi +=
      `
   <li class="iteis">
    <img class="Imagem" src=${produt.src}>
    <p class="myEscolha">${produt.name}</p>
    <p class="price">Pix R$ ${produt.price * lowPrice}  </p>
   </li>
 `
  });
  //Aqui a informação da minha myLi vai para o html
  list.innerHTML = myLi
};