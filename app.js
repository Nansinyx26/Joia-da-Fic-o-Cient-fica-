function pesquisar() {
    //console.log(dados);
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);


    let campoPesquisa = document.getElementById("campo-pesquisa").value


    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Você precisa digitar alguma informação por exemplo buraco negro.</p>"
        section.querySelector('p').style.color = 'red';
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()



    console.log(campoPesquisa);


    let resultados = "";
    let titulo = "";
    let descriçao = "";
    let tags = "";


    // para cada dado de dentro da lista de dados queremos que algo aconteça '-'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descriçao = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
            //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descriçao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Cria um novo elemento HTML para cada resultado
            resultados +=
                `
<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <div class="filme">
                    <img src="${dado.gif}" alt="GIF de ${dado.gif}">
                </div>
                <a href=${dado.link} target="_blank"> Mais detalhes</a>
            </div>

`
        }



    }

    if (!resultados) {
        resultados = `<p style="color: red;">Nada foi encotrado com sua pesquisa.</p>`;
    }

    section.innerHTML = resultados

}