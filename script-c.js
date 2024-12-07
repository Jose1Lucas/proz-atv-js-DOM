//usando .innerHTML

let NovoTitulo = document.createElement("h1");

const PaiElementoTitulo = document.querySelector(".cabecalho");

PaiElementoTitulo.innerHTML = `<h1>PRODUTOS DE TECNOLOGIA</h1>`;

//aqui criamos um novo elemento por enquanto vazio.

let Elemento = document.createElement("li");

//após isso vemos ele no console.

console.log(Elemento.outerHTML);

//aqui adicionamos o conteúdo a este item.

Elemento.innerText = "GPU PLACA DE VÍDEO";

//após isso designamos para ele uma tag.

Elemento.id = "gpu";

//aqui vemos ele no console ainda vazio porém com a tag.

console.log(Elemento.outerHTML);

//maipulando o DOM criamos uma váriavel que
//guarda como valor a lista que queremos modificar.

//usamos o querySelector para selecionar (capturar) o elemento pela "class".

const PaiElementoLinguagens = document.querySelector(".lista-produtos");

//após isso ele recebe o Elemento com o método
//appendChild que significa "adicionar filho"
//adicionando o novo "li" ao "ul" respectivo lá no DOM.

PaiElementoLinguagens.appendChild(Elemento);

//ascima temos várias etapas porém simplificando de outra forma:

//--------------------------------------------------
//criamos um elemento e usamos a propriedade innerHTML
//com uma template string para adicionar o conteúdo.
//--------------------------------------------------


let NovoProduto = document.createElement("div");

NovoProduto.innerHTML = `<h2 class="info-titulo"> Placa-mãe GIGABYTE Z790 AORUS Master:</h2>

<p class="texto-lead">

A Placa-mãe GIGABYTE Z790 AORUS Master chega ao mercado ao custo de R$ 7.699,90. COMPRE JÁ!

</p>`;

//usamos o querySelector para selecionar (capturar) o elemento pai pela "class".

const PaiElementoPostagens = document.querySelector(".aba-produtos");

//após isso ele recebe o NovaPostagemJs com o método
//appendChild que significa "adicionar filho"
//adicionando a nova "div" ao "section" respectivo lá no DOM.

PaiElementoPostagens.appendChild(NovoProduto);

//desta forma conseguimos manipular os elementos preexistentes no site 
//e populá-los com novas informações usando a linguagem JavaScript.
