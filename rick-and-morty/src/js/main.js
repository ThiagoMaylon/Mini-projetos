fetch('https://rickandmortyapi.com/api/character',{
    method: 'GET'
})
    .then(response => response.json())
    .then(json => {
        let conteiner = document.querySelector(".conteiner");
        json.results.map(results => {
            conteiner.innerHTML += `
                <div class="card">
                    <div class="content">
                        <img src="${results.image}">
                        <p><strong>NOME</strong>: ${results.name}</p>
                        <p><strong>LOCALIZAÇÃO</strong>: ${results.location.name}</p>
                        <p><strong>ORIGEM</strong>: ${results.origin.name}</p>
                        <p><strong>ESPECIE</strong>: ${results.species}</p>
                        <p><strong>STATUS</strong>: ${results.status}</p>
                    </div>
                </div>
            `
        })
    })
    .catch(e => console.log(e));

