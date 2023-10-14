let search = document.getElementById('searchInput');
let container = document.getElementById('searchResults');
let spinner = document.getElementById('spinner');



function createAndAppendSeach(array) {

    let {
        title,
        link,
        description
    } = array;

    let div = document.createElement('div');
    div.classList.add('search-results');
    container.appendChild(div);

    let title1 = document.createElement('a');
    title1.href = link;
    title1.target = '_blank';
    title1.classList.add('result-title');
    title1.textContent = title;
    div.appendChild(title1);


    let break1 = document.createElement('br');
    div.appendChild(break1);

    let link1 = document.createElement('a');
    link1.classList.add('result-url');
    link1.href = link;
    link1.target = link;
    link1.textContent = link;
    div.appendChild(link1);

    let break2 = document.createElement('br');
    div.appendChild(break2);

    let description1 = document.createElement('p');
    description1.classList.add('link-description');
    description1.textContent = description;
    div.appendChild(description1);
}

function displayResult(result) {
    spinner.classList.toggle('d-none');

    for (let array of result) {
        createAndAppendSeach(array);

    }
}
function displaySearch(event) {
    if (event.key === 'Enter') {
        container.textContent = "";
        spinner.classList.toggle('d-none');
        let searchValue = search.value;
        let options = {
            method: 'GET'
        }
        let url = 'https://apis.ccbp.in/wiki-search?search=' + searchValue;
        fetch(url, fetch)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResult(search_results);
            })
    }
}



search.addEventListener('keydown', displaySearch);