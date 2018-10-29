console.log('dom loaded');
const beerlist = document.querySelector('#list-group');
const beerDetail = document.querySelector('.beer-detail');

fetch('http://localhost:3000/beers')
  .then(resp => resp.json())
  .then(resp => addBeerstopage(resp))

function addBeerstopage(beers) {
    beers.forEach(function(beer) {
     addBeerstobody(beer)
  });
}

function addBeerstobody(beer) {
  const newbeeritem = document.createElement('li');
  newbeeritem.id = beer.id
  newbeeritem.innerText = beer.name
  newbeeritem.className = "list-group-item"
  beerlist.appendChild(newbeeritem);
}

// beerlist.addEventListener("click", showbeer(beer));

beerlist.addEventListener("click", function(event) {
  event.preventDefault();
   const payload = {
     beer: {

     }
   }
})

function clickedbeer() {
	if (event.target.id) {
		showbeer(event.target.id)
	}
}
fetch('http://localhost:3000/beer/:id')
  .then(resp => resp.json())
  .then(json => showbeer(beer))

function showbeer(beer) {

  const singlebeer = document.createElement('div')
  singlebeer.id = beer.id
  singlebeer.className = "beer-info"
  singlebeer.innerHTML = `
  <h1>${beer.name}</h1>
<img src= ${beer.image_url}>
<h3>${beer.tagline}</h3>
<textarea>${beer.description}</textarea>
<button id="edit-beer" class="btn btn-info">
Save
</button>
  `
  beerDetail.appendChild(singlebeer);
}


function addBeerdetails() {}
