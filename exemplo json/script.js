const livros = [
{
    "titulo":"Os segredos da mente milhonaria",
    "autor":"Robert G. Allen",
    "ano_publicação":2006,
    "Capa_livro":"https://m.media-amazon.com/images/I/81WzW3xJb5L._SY342_.jpg"
    },
    {
        "titulo":"Pai rico,pai pobre",
        "autor":"Robert Kiyosaki"
        ,"ano_publicação":2017,
        "Capa_livro":"https://m.media-amazon.com/images/I/61MK1gpGfoS._SY342_.jpg"
    },
    {
        "titulo":"O poder da ação",
        "autor":" Paulo Vieira",
        "ano_publicação":2015,
        "Capa_livro":"https://m.media-amazon.com/images/I/71vrSJIKk3L._SY342_.jpg"
    }
]
function carregarLivros(livros) {
const divBiblioteca = document.querySelector('#biblioteca')
divBiblioteca.innerHTML=''

livros.forEach(livro=>{
    const estruturaHtml = `
    <h2>${livro.titulo}</h2>
    <ul>
        <li>Autor:${livro.autor}</li>
        <li>Ano de publicação:${livro.ano_publicação}</li>
        <li>
            <img src="${livro.Capa_livro}" alt="">
        </li>
    </ul>
    <hr>`
    divBiblioteca.innerHTML += estruturaHtml
    })
}
carregarLivros(livros)