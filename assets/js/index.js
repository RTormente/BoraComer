import { renderComponent } from "./components.js";
//import { dataJson } from "./dataJson.js";
//import SlideShow from "./slide_show.js";

await renderComponent("assets/components/footer.html", "footer");
await renderComponent("assets/components/header.html", "header");

document.getElementById("menuMobile").addEventListener("click", (event) => {
    document.querySelector("header nav").classList.toggle("isVisibleFlex");
    document.getElementById("menuClose").classList.toggle("isVisible");
});

document.getElementById("menuClose").addEventListener("click", (event) => {
    document.querySelector("header nav").classList.toggle("isVisibleFlex");
    document.getElementById("menuClose").classList.toggle("isVisible");
});

/****** load data ******/


/*
const dbestabelecimentos = new dataJson("../assets/data/estabelecimento.json");
dbestabelecimentos.consult("teste, testes, testoes, testadas");
*/


const estabelecimentos = [];
const receitas = [];

await fetch("../assets/data/estabelecimento.json").then((response) => {
    response.json().then((data) => {
        data.map((item) => {
            estabelecimentos.push(item);
            console.log(estabelecimentos.length);
        });
    });
});
await fetch("../assets/data/receita.json").then((response) => {
    response.json().then((data) => {
        data.map((item) => {
            receitas.push(item);
        });
    });
});

/****** Slide Show ******/

const dataList = [];

for (let i = estabelecimentos.length - 2; i < estabelecimentos.length; i++) {
    let item = {};
    item.id = estabelecimentos[i]["idEstabelecimento"];
    item.tipo = "estabelecimento";
    item.imagem = estabelecimentos[i]["imagem"];
    item.nome = estabelecimentos[i]["descricao"];

    dataList.push(item);
}

for (let i = receitas.length - 2; i < receitas.length; i++) {
    let item = {};
    item.id = receitas[i]["idReceita"];
    item.tipo = "receita";
    item.imagem = receitas[i]["imagem"];
    item.nome = receitas[i]["descricao"];

    dataList.push(item);
}


console.log(dataList);