let results = JSON.parse(sessionStorage.getItem("results"));

const resultsRow = document.getElementById("resultsRow");
console.log(results);

const hideSpinner = () => {
  let spinnerEl = document.querySelectorAll(".spinner-border");
  spinnerEl.forEach((el) => el.classList.add("d-none"));
};

let createCard = (prodImg, prodName, prodId, prodPrice, constRow, prodDes) => {
  let newCol = document.createElement("div");
  newCol.setAttribute("class", "col-12 col-md-4 col-xl-2");
  newCol.innerHTML = `<div class="card border-0" style="margin:0 auto;"><img src="${prodImg}" class="card-img-top" alt="..."><div class="card-body"><span class="align-self-end" style="font-size: 26px">${prodPrice}$</span><h5 class="card-title">${prodName}</h5><p class="text-truncate">${prodDes}</p></div><a href="./details.html?prodId=${prodId}" id="btnMore-${prodId}">Scopri dettagli</a></div>`;
  constRow.appendChild(newCol);
  hideSpinner();
};

if (results.length == 0) {
  alert("La ricerca non ha prodotto risultati");
  hideSpinner();
}
results.forEach((el) =>
  createCard(el.imageUrl, el.name, el._id, el.price, resultsRow, el.description)
);
