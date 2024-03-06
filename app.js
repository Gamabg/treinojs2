const btn1 = document.querySelector('button')
const listaFilms = document.querySelector('#listaFilmes')

//ID pega com #
// classe com . 
//window.alert('Boa Calabreso')

btn1.addEventListener('click', ()=>{
    //cria o elemento li
    const valorDigitado = document.querySelector('#filmeInput').value
    //coloca o valor do value
    const itemLista = document.createElement('li')
    //adiciona o li á lista
    listaFilms.append(itemLista)
    //adiciona o conteudo di li 
    itemLista.innerHTML = valorDigitado
    //adiciona o conteudo
    itemLista.style.backgroundColor = 'pink'
    //adiciona uma classe ao item 
    itemLista.classList.add(fundo-azul)
    //adiciona classes do css
})