// PROD. TEMPLATE:
// {
//     "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//     "name": "app test 1",  //REQUIRED
//     "description": "somthing longer", //REQUIRED
//     "brand": "nokia", //REQUIRED
//     "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//     "price": 100, //REQUIRED
//     "userId": "admin", //SERVER GENERATED
//     "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "__v": 0 //SERVER GENERATED
//     }

// EMBED AUTHORIZATION :
// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZjNWQ2ZTdjOThmNDAwMTQyODk3NWMiLCJpYXQiOjE2OTQyNjA1OTEsImV4cCI6MTY5NTQ3MDE5MX0.AVeBCgFbhW1CgW28mYm-A7jSuouCTZ0wlVOjpH7Tqxw"
// }
// })

const prods_URL = "https://striveschool-api.herokuapp.com/api/product/";
let prodId = new URLSearchParams(window.location.search).get("prodId");
const backForm = document.getElementById("backForm");

backForm.addEventListener("reset", (ev) => {
  if (!window.confirm("Do you really want to reset values?")) {
    ev.preventDefault();
  }
});

let backDel = async () => {
  if (window.confirm("Do you really want to delete this product?")) {
    let response = await fetch(prods_URL + prodId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZjNWQ2ZTdjOThmNDAwMTQyODk3NWMiLCJpYXQiOjE2OTQyNjA1OTEsImV4cCI6MTY5NTQ3MDE5MX0.AVeBCgFbhW1CgW28mYm-A7jSuouCTZ0wlVOjpH7Tqxw",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Prodotto eliminato!");
      window.location = "./index.html";
    } else {
      alert("Si è riscontrato un errore, il prodotto non è stato eliminato!");
    }
  } else {
    window.location = "./index.html";
  }
};

// SE ESISTE UN PARAMETRO prodId NEL URL, FETCHA TALE ID E POPOLA IL FORM CON I SUOI DATI
if (prodId) {
  fetch(prods_URL + prodId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZjNWQ2ZTdjOThmNDAwMTQyODk3NWMiLCJpYXQiOjE2OTQyNjA1OTEsImV4cCI6MTY5NTQ3MDE5MX0.AVeBCgFbhW1CgW28mYm-A7jSuouCTZ0wlVOjpH7Tqxw",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("Error!");
      }
    })
    .then((prodData) => {
      console.log(prodData);

      document.getElementById("prodName").value = prodData.name;
      document.getElementById("prodDespt").value = prodData.description;
      document.getElementById("prodBrand").value = prodData.brand;
      document.getElementById("prodImg").value = prodData.imageUrl;
      document.getElementById("prodPrice").value = prodData.price;

      document.getElementById("submit").innerHTML = "Modify Product";

      let deleteBtn = document.getElementById("backDelete");
      deleteBtn.classList.remove("invisible");
      deleteBtn.addEventListener("click", backDel);
    })
    .catch((error) => {
      console.log(error);
    });
}

// SE ESISTE UN PARAMETRO prodId NEL URL LA QUERY E' PUT E MIRA A TALE ID, ALTRIMENTI E' POST E MIRA ALL'ENDPOINT GENERALE
const queryProd = async function (newProd) {
  try {
    let url = prodId ? prods_URL + prodId : prods_URL;

    let response = await fetch(url, {
      method: prodId ? "PUT" : "POST",
      body: JSON.stringify(newProd),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZjNWQ2ZTdjOThmNDAwMTQyODk3NWMiLCJpYXQiOjE2OTQyNjA1OTEsImV4cCI6MTY5NTQ3MDE5MX0.AVeBCgFbhW1CgW28mYm-A7jSuouCTZ0wlVOjpH7Tqxw",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Prodotto aggiunto correttamente!");
    } else {
      alert("Si è riscontrato un errore, prodotto non aggiunto!");
    }
  } catch (error) {
    console.log(error);
  }
};

// AL SUBMIT DEL FORM IMPACCHETTA L'OGGETTO CHE SARA' PASSATO ALLA QUERY

backForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProd = {
    name: document.getElementById("prodName").value,
    description: document.getElementById("prodDespt").value,
    brand: document.getElementById("prodBrand").value,
    imageUrl: document.getElementById("prodImg").value,
    price: document.getElementById("prodPrice").value,
  };
  queryProd(newProd);
});
