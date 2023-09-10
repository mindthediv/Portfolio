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

const trendRow = document.querySelector("#productsGrid #trendRow");
const arrivesRow = document.querySelector("#productsGrid #arrivesrow");
const prodRow = document.querySelector("#productsGrid #prodRow");
const prods_URL = "https://striveschool-api.herokuapp.com/api/product/";
let prodArray = [];

// NASCONDE SPNNER
const hideSpinner = () => {
  let spinnerEl = document.querySelectorAll(".spinner-border");
  spinnerEl.forEach((el) => el.classList.add("d-none"));
};

// FETCHA I PRODOTTI E CON createCard() LI AUTOGENERA
const getProducts = async function () {
  try {
    let response = await fetch(prods_URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZjNWQ2ZTdjOThmNDAwMTQyODk3NWMiLCJpYXQiOjE2OTQyNjA1OTEsImV4cCI6MTY5NTQ3MDE5MX0.AVeBCgFbhW1CgW28mYm-A7jSuouCTZ0wlVOjpH7Tqxw",
      },
    });
    console.log(response);
    if (response.ok) {
      let products = await response.json();
      hideSpinner();
      products.forEach((el) => {
        createCard(
          el.imageUrl,
          el.name,
          el._id,
          el.price,
          prodRow,
          el.description
        );
      });
      prodArray = Array.from(products);
      // Assegna un randomico tasso di vendita (col quale assegnare l ordine in tendenza)
      prodArray.forEach(
        (el) => (el.sellings = Math.floor(Math.random() * 100) + 1)
      );
      console.log(prodArray);
      // sorta prodArray per eseguire l'append din trendRow secondo ordine di tendenza
      let trendArray = prodArray;
      trendArray.sort((a, b) => {
        if (a.sellings > b.sellings) {
          return -1;
        }
        if (a.sellings < b.sellings) {
          return 1;
        }
        return 0;
      });
      trendArray.forEach((el) =>
        createCard(
          el.imageUrl,
          el.name,
          el._id,
          el.price,
          trendRow,
          el.description
        )
      );

      console.log(trendArray);

      console.log(trendArray);
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
getProducts();

let createCard = (prodImg, prodName, prodId, prodPrice, constRow, prodDes) => {
  let newCol = document.createElement("div");
  newCol.setAttribute("class", "col-12 col-md-4 col-xl-2");
  newCol.innerHTML = `<div class="card border-0" style="margin:0 auto;"><img src="${prodImg}" class="card-img-top" alt="..."><div class="card-body"><span class="align-self-end" style="font-size: 26px">${prodPrice}$</span><h5 class="card-title">${prodName}</h5><p class="text-truncate">${prodDes}</p></div><a href="./details.html?prodId=${prodId}" id="btnMore-${prodId}">Scopri dettagli</a></div>`;
  constRow.appendChild(newCol);
};

// NAVBAR/////////////////////////////////////////////////////////////////////////

//SEARCH BAR - al submit salva in session un .filter dei prodotti che iniziano per
// i caratteri digitati ed indirizza a results.html che li printa
const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const search = document.getElementById("search");
  let filtered = prodArray.filter((el) => el.name.startsWith(search.value));
  sessionStorage.setItem("results", JSON.stringify(filtered));
  window.location = "./results.html";
});

//LOGIN
// Ipotizza un array di utenti costituito da oggetti(username,password,role).
// Se accede un consumer -> no backoffice /fatto
// se accede un admin -> backoffice /fatto
// se accede un non registrato -> registrati /da fare più in là
class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
const elon = new User("Elon", "Musk", "consumer");
const bill = new User("Bill", "Gates", "consumer");
const chuck = new User("uno", "qualsiasi", "admin");
let users = [elon, bill, chuck];

const loginForm = document.getElementById("login");
const loginItem = document.querySelectorAll(".login-item");
const btnLogout = document.getElementById("logout");

// Se un utente E' loggato il dropdown del profilo mostrerà solo il bottone per il Logout
let displayLogout = () => {
  if (sessionStorage.getItem("logged")) {
    loginItem.forEach((el) => el.classList.add("d-none"));
    btnLogout.classList.remove("d-none");
    console.log(btnLogout);
    console.log(loginItem);
  }
};
displayLogout();
// Al logout il dropdown torna come prima
btnLogout.addEventListener("click", () => {
  sessionStorage.removeItem("logged");
  sessionStorage.removeItem("backoffice");
  loginItem.forEach((el) => el.classList.remove("d-none"));
  btnLogout.classList.add("d-none");
  window.location.reload();
});

// Verifica la coppia username-password
let loginCheck = () => {
  let userValue = document.getElementById("username").value;
  let passValue = document.getElementById("password").value;

  let passCheck = (obj) => {
    if (obj.password == passValue) {
      sessionStorage.setItem("logged", JSON.stringify(obj));
    }
    alert(`Bentornato ${obj.username}`);
  };

  users.forEach((el) => {
    if (el.username == userValue) {
      passCheck(el);
    }
  });
};

//Se l'utente loggato è un admin assegna .backoffice (d: inline-block) sull'array di elementi con classe 'hideback'
//divisa in setBO() che si scatena su login accettato, e getBO(), che si scatena ogni qualvolta serve
let setBackoffice = () => {
  let loggedObj = JSON.parse(sessionStorage.getItem("logged"));
  if (loggedObj.role == "admin") {
    sessionStorage.setItem("backoffice", "true");
  } else {
    sessionStorage.setItem("backoffice", "false");
  }
};
let getBackoffice = () => {
  let hideback = document.querySelectorAll(".hideback");
  let backElArray = Array.from(hideback);
  let backVal = sessionStorage.getItem("backoffice");
  backElArray.forEach((el) => {
    if (backVal == "true") {
      el.classList.add("backoffice");
    } else {
      el.classList.remove("backoffice");
    }
  });
};
getBackoffice();
// Handler del login al submit del form
loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  loginCheck();
  setBackoffice();
  getBackoffice();
  displayLogout();
});
