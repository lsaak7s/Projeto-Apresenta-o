🍔 Apresentação

Um projeto de cardápio interativo desenvolvido com HTML, CSS e JavaScript, criado com o objetivo de praticar e aplicar conceitos importantes de JavaScript em um projeto real.

O projeto permite visualizar os produtos, filtrar opções veganas, calcular o valor total dos produtos e aplicar desconto para pagamento via Pix.

🚀 Demonstração
📋 Cardápio

Exibe os produtos disponíveis com imagem, nome e preço.

🌱 Vegan

Filtra o cardápio mostrando apenas os produtos que possuem opção vegana.

💰 Desconto

Calcula o valor total dos produtos e aplica um desconto de 20% para pagamento via Pix.

🧮 Total

Utiliza os valores dos produtos para calcular automaticamente o valor final da compra.

🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript
Manipulação do DOM
Arrays e objetos
Funções
Arrow Functions
Eventos
map()
filter()
reduce()
Template Literals
Operadores matemáticos
toFixed()
🧠 Conceitos de JavaScript praticados
🔄 map()

Utilizado para percorrer os produtos e transformar os dados em elementos que podem ser exibidos na página.

products.map((product) => {
    // manipulação dos produtos
})
🔎 filter()

Utilizado para filtrar os produtos, como na opção de visualizar apenas os produtos veganos.

products.filter((product) => product.vegan)
➕ reduce()

Utilizado para somar os preços dos produtos e encontrar o valor total da compra.

products.reduce((acc, product) => acc + product.price, 0)
💸 Cálculo de desconto

O projeto também trabalha com cálculos utilizando porcentagem.

const discount = total * 0.20
const finalPrice = total - discount
📌 Funcionalidades

Exibição dos produtos

Filtro de produtos veganos

Cálculo do valor total

Aplicação de desconto

Cálculo do valor com desconto via Pix

Manipulação dinâmica dos elementos da página

Interação através de botões

Formatação dos valores monetários

🎯 Objetivo do projeto

O principal objetivo foi colocar em prática os conhecimentos adquiridos durante meus estudos de JavaScript, principalmente o uso de métodos de array como:

map() • filter() • reduce()

Além disso, o projeto ajudou a desenvolver minha lógica de programação e minha capacidade de manipular elementos HTML utilizando JavaScript.

📚 O que aprendi

Durante o desenvolvimento deste projeto, pratiquei:

Manipulação do DOM
Eventos de clique
Manipulação de arrays
Criação e utilização de funções
Uso de métodos de array
Filtros de dados
Soma e cálculo de valores
Cálculo de porcentagem
Aplicação de descontos
Atualização dinâmica da interface
Organização do código JavaScript
