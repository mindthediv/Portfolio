const detailRow = document.querySelector("#productsDetails .row");
const prods_URL = "https://striveschool-api.herokuapp.com/api/product/";
let prodId = new URLSearchParams(window.location.search).get("prodId");
const modBtn = document.getElementById("modBtn");

let showDetail = async () => {
  let response = await fetch(prods_URL + prodId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZjNWQ2ZTdjOThmNDAwMTQyODk3NWMiLCJpYXQiOjE2OTQyNjA1OTEsImV4cCI6MTY5NTQ3MDE5MX0.AVeBCgFbhW1CgW28mYm-A7jSuouCTZ0wlVOjpH7Tqxw",
    },
  });
  let prodData = await response.json();
  let prodDetail = document.createElement("div");
  prodDetail.classList.add("col-12");
  prodDetail.innerHTML = `<div class="card mb-3 border-0" style="width: 100%"><div class="row g-0"><div class="col-md-4"><img src="${prodData.imageUrl}" class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h2 class="card-title">${prodData.name}</h2><p class="card-text">${prodData.description}</p><p class="card-text"><small class="text-muted">${prodData.brand}</small></p><p>Prezzo: ${prodData.price}$</p></div></div></div></div>`;
  modBtn.setAttribute("href", `./backoffice.html?prodId=${prodId}`);
  detailRow.appendChild(prodDetail);
};

showDetail();

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
