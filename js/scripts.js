window.onload = async () => {
  await getUsers();
  // await showUser();
};

var users;

function getUsers() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      users = JSON.parse(this.responseText);
      appendUser(users);
      showUser(1);
    }
  };
  xmlhttp.open("GET", "../dados.json", true);
  xmlhttp.send();
}

function appendUser(users) {
  users.forEach(user => {
    let newUser = createUser(user);
    let lista = document.getElementById("users");
    lista.appendChild(newUser);
  });
}

function createUser(user) {
  let img = document.createElement("img");
  img.setAttribute("alt", "Profile");
  img.setAttribute("src", "./img/" + user.foto);
  let user_id = document.createElement("span");
  user_id.classList.add("user_id");
  user_id.innerHTML = user.id;

  let div = document.createElement("div");
  div.appendChild(user_id);
  div.appendChild(img);

  let user_data = document.createElement("div");
  user_data.classList.add("user_data");
  user_data.appendChild(div);

  let nome = document.createElement("span");
  nome.classList.add("nome");
  nome.innerHTML = user.nome;
  let cargo = document.createElement("span");
  cargo.classList.add("cargo");
  cargo.classList.add("charge");
  cargo.innerHTML = user.cargo;

  let info = document.createElement("div");
  info.classList.add("info");
  info.appendChild(nome);
  info.appendChild(cargo);

  let dados = document.createElement("div");
  dados.classList.add("dados");
  dados.appendChild(info);
  user_data.appendChild(dados);
  user_data.setAttribute("data-userid", user.id);
  user_data.addEventListener("click", function() {
    let userid = this.getAttribute("data-userid");
    showUser(parseInt(userid));
  });

  return user_data;
}

function showUser(id = 1) {
  let user = users.filter(user => {
    if (user.id === id) {
      return true;
    }
  });

  document
    .querySelector(".user_img")
    .setAttribute("src", "./img/" + user[0].foto);
  document.querySelector(".user_nome").innerHTML = user[0].nome;
  document.querySelector(".user_cargo").innerHTML = user[0].cargo;
  document.querySelector(".user_idade").innerHTML = user[0].idade;
}
