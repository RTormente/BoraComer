import { renderComponent } from "./components.js";
import { dataJson, getJson } from "./dataJson.js";
import { addDragCarouselSlideShow } from "./slide_show.js";

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


const estabelecimentos = await getJson("../assets/data/estabelecimento.json");
const receitas = await getJson("../assets/data/receita.json");

function filterSlide (obj, qtd) {
    let result = [];
    
    for (let i = obj.length - qtd; i < obj.length; i++) {
        let item = {}
        
        item.image = obj[i].imagem;
        item.url = (obj[i].hasOwnProperty('idEstabelecimento')) ? "restaurante_indicado.html?idRestaurante=" + obj[i].idEstabelecimento : "receita_completa.html?receitaID=" + obj[i].idReceita;
        item.name = obj[i].nome;

        result.push(item);
    }
    
    return result;
}


/****** Slide Show ******/
const slideshowConteiner = document.getElementById("slideshow");
let dataList = [];

dataList = filterSlide(estabelecimentos, 3);
dataList = dataList.concat(filterSlide(receitas, 3));

addDragCarouselSlideShow( dataList, slideshowConteiner );