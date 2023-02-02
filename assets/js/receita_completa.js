const receita = [
    {
        imagem: 'assets/images/img_reh/bolocacau.jpg',

        nomeReceita: 'Bolo de Chocolate',
        descricao: 'Bolo de chocolate feito com cacau 100%, vegano, extremamente fofinho e gostoso!',

        autor: 'Rodrigo Tormente',
        tempoPreparo: '40 min',
        rendimento: '12 porções',
        dificuldade: 'Fácil',

        iconeRestricao1: '<img width="50px" height="50px" src="assets/images/icon_gluten.png" alt="glutem" title="Contém Glútem"/>',
        iconeRestricao2: '<img width="50px" height="50px" src="assets/images/icon_vegan-on.png" alt="vegano" title="Vegano"/>',
        iconeRestricao3: '',
        iconeRestricao4: '',

        ingredientes: ['2 xícaras de farinha de trigo', '1/4 xícaras de amido de milho', '1/2 xícaras de cacau em pó', '1+1/2 xícaras de açucar', '1 colher de sopa de bicarbonato de sódio', '1/2 colher de sopa de fermento quimico', '1 pitada sal;', ' 1+1/2 xicaras de agua', '1/2 xicara de óleo', '1/4 xícara de café', '1 colher de sopa de vinagre'],
        bolinha: '<img width="11px" height="11px" src="assets/images/img_reh/circuloamarelo1.png"/>',

        preparo: ['Coloque o forno para pré aquecer em 200ºC.', 'Em uma vasilha misture todos os secos peneirados.', 'Em outro recipiente coloque todos os molhados e os despeje sobre os secos.', 'Misture todos os ingredientes até obter uma massa homogênea.', 'Despeje a massa na forma e a coloque no forno.', 'Após 10 minutos reduzir a temperatura para 180ºC.', 'Após assado retirar do forno.', 'Desenformar com o bolo frio ou morno mais para frio.'],
        setinha: '<img width="15px" height="15px" src="assets/images/img_reh/setaamarela1.png"/>',
        
        dicas: ['Dê preferência a óleos neutros, como os de: girassol, canola e milho.', 'Caso não possua amido de milho basta usar a mesma quantidade de farinha de trigo, o amido de milho serve para deixar o bolo mais fofinho ainda.', 'Ao fazer o café faça ele forte, independente se é coado ou expresso, afinal, ele serve para destacar o sabor do cacau.', 'O vinagre de preferência para o de álcool ou de maçã, porém outros não costumam deixar sabor residual, ele serve para auxiliar no crescimento da massa.'],
       
    },    
    ]

// populando imagem da receita

    const imagemRec = document.createElement('div');

    imagemRec.innerHTML = `
    <img class="imagem_receita" src="${receita[0].imagem}" alt="foto_receita" title="${receita[0].nomeReceita}"/>
    `

    const divImagemRec = document.querySelector('div[class="imagem_rec"]');
    
    divImagemRec.appendChild(imagemRec);



// populando o título e sub título

    const textoDescricaoReceita = Object.assign(document.createElement('div'), {
       classList: ['texto_descricao_receita']
    });
    
    textoDescricaoReceita.innerHTML = `
    <h1>${receita[0].nomeReceita}</h1>
    <p>${receita[0].descricao}</p>    
    `    

    const divTituloReceita = document.querySelector('div[class="titulo_receita"]');
    
    divTituloReceita.appendChild(textoDescricaoReceita);



// populando dados da receita

const dados = document.createElement('div');

dados.innerHTML = `
<p><strong>Autor:</strong> ${receita[0].autor}</p>
<p><strong>Tempo de Preparo:</strong> ${receita[0].tempoPreparo}</p>
<p><strong>Rendimento:</strong> ${receita[0].rendimento}</p>
<p><strong>Dificuldade:</strong> ${receita[0].dificuldade}</p>
`

const dadosReceita = document.querySelector('div[class="dados_receita"]');

dadosReceita.appendChild(dados);



// populando ícones de restrição

//ícone 1
const icone1 = Object.assign(document.createElement('div'), {
    classList: ['icone1']
 });

 icone1.innerHTML = `
 ${receita[0].iconeRestricao1}
 `

 const iconesRestricao = document.querySelector('div[class="icones_restricao"]');

 iconesRestricao.appendChild(icone1);


 //ícone 2
const icone2 = Object.assign(document.createElement('div'), {
    classList: ['icone2']
 });

 icone2.innerHTML = `
 ${receita[0].iconeRestricao2}
 `

 iconesRestricao.appendChild(icone2);


 //ícone 3
const icone3 = Object.assign(document.createElement('div'), {
    classList: ['icone3']
 });

 icone3.innerHTML = `
 ${receita[0].iconeRestricao3}
 `

 iconesRestricao.appendChild(icone3);


 //ícone 4
const icone4 = Object.assign(document.createElement('div'), {
    classList: ['icone4']
 });

 icone4.innerHTML = `
 ${receita[0].iconeRestricao4}
 `

 iconesRestricao.appendChild(icone4);



// populando Ingredientes

const ingredientes = document.createElement('div');

ingredientes.innerHTML = `
<h2>Ingredientes:</h2>
<nav>
    <ul>                                  
        <h3>Secos:</h3>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[0]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[1]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[2]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[3]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[4]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[5]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[6]}</li>
        <h3>Molhados:</h3>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[7]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[8]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[9]}</li>
        <li>${receita[0].bolinha} ${receita[0].ingredientes[10]}</li>
    </ul>
</nav>
`

const listaIngredientes = document.querySelector('div[class="lista_ingredientes"]');

listaIngredientes.appendChild(ingredientes);



// populando modo de preparo

const preparo = document.createElement('div');

preparo.innerHTML = `
<h2>Modo de preparo:</h2>
<nav>
    <ul>
        <li>${receita[0].setinha} ${receita[0].preparo[0]}</li>
        <li>${receita[0].setinha} ${receita[0].preparo[1]}</li>
        <li>${receita[0].setinha} ${receita[0].preparo[2]}</li>
        <li>${receita[0].setinha} ${receita[0].preparo[3]}</li>
        <li>${receita[0].setinha} ${receita[0].preparo[4]}</li>
        <li>${receita[0].setinha} ${receita[0].preparo[5]}</li>
        <li>${receita[0].setinha} ${receita[0].preparo[6]}</li>
        <li>${receita[0].setinha} ${receita[0].preparo[7]}</li>
    </ul>
</nav>
`

const textoModoPreparo = document.querySelector('div[class="preparo"]');

textoModoPreparo.appendChild(preparo);



// populando dicas

const dicasRec = document.createElement('div');

dicasRec.innerHTML = `
<h3>Dicas:</h3>
<nav>
    <ul>
        <li>${receita[0].dicas[0]}</li>
        <li>${receita[0].dicas[1]}</li>
        <li>${receita[0].dicas[2]}</li>
        <li>${receita[0].dicas[3]}</li>
    </ul>
</nav>
`

const dicas = document.querySelector('div[class="dicas"]');

dicas.appendChild(dicasRec);