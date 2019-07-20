window.onload = function() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var users = JSON.parse(this.responseText);
      getUsers(users);
    }
  };
  xmlhttp.open("GET", "../dados.json", true);
  xmlhttp.send();
};

{
  /* <div class="user_data">
  <div>
    <span class="number">1</span>
    <img src="./img/man.svg" alt="Profile" />
  </div>
  <div class="dados">
    <div class="info">
      <span class="nome">Alberto</span>
      <span class="cargo charge">Presidente</span>
    </div>
  </div>
</div> */
}

function getUsers(users) {
  console.log(users);
}
