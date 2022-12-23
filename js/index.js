const requestURL = "../json/misLibros.json";


async function fetchBooksJson(){
    const response = await fetch(requestURL);
    const books = await response.json();
    return books;
}


fetchBooksJson().then(books =>{
    for (let index = 0;index < books.misLibros.length ;index++)
    {
        const booksSection = document.getElementById("bookSection");
        
            let id = books.misLibros[index].id;
            let img = books.misLibros[index].caratula;
            let title = books.misLibros[index].titulo;
            let description = books.misLibros[index].descripcion;
            let genre = books.misLibros[index].genero;
            let author = books.misLibros[index].autor;
            let yearPublication=books.misLibros[index].añoDePublicacion;

        booksSection.innerHTML += `
            <div class="card" style="width: 23rem;">
                <img src="${img}" class="card-img-top" alt="Portada del libro">
                <div class="card-body">
                    <h4 class="card-title cardTitle">${id}. ${title}</h4>
                    <h5 class="card-title author">Autora: ${author}</h5>
                    <h5 class="card-title genre">Género: ${genre}</h5>
                    <h5 class="card-title publicationYear">Año de publicación: ${yearPublication}</h5>
                    
                    <details>
                        <summary>Resumen: </summary>
                        <div>
                        <strong>${title}. </strong>${description}
                        </div>
                    </details>

                    <div class="buyIt">
                    <a href="https://www.casadellibro.com/libro-la-sombra-de-la-sirena-serie-fjallbacka-6/9788415140924/2109337?q=serie+fjallbacka" class="btn btn-outline-secondary">Comprar</a>
                </div>    
 
            </div>
        `
    };
})

