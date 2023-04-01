// bismillah
let elForm = document.querySelector("#form")
let elList = document.querySelector("#list")
let key = "c251dfbf"
let dataArray = []

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let {search} = evt.target.elements;
  
    elList.innerHTML = `
      <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      `;
    getApi(search.value.trim(), key);
  });

async function getApi(search, key) {
    let data = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${search}`)
    .then((res) => res.json())
    .then((data) => data.Search)
    .catch((error) => console.log(error))
    renderFunc(data, elList)
}

function renderFunc(array, element){
    element.innerHTML = null

    array.forEach((film) => {
        let newLi = document.createElement("li")
        let img = document.createElement("img")

        img.src = film.Poster
        newLi.textContent = film.Title


        element.append(img, newLi)
    })
}