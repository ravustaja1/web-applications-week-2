import "./styles.css";

let firstRun = false;

if (firstRun === true) {
  addRown("Kalle", "kalle@suomi.fi", "Katajakatu 1", "X");
  addRown("Seppo", "seppo@ruotsi.fi", "Kuusikatu 1", "-");
  firstRun = false;
}
console.log(firstRun);
document.getElementById("app").innerHTML = `
  <table id="table1">
  <thead>
  <tr>
    <th>Username</th>
    <th id="email">Email</th>
    <th id="address">Address</th>
    <th>Admin</th>
  </tr>
</thead>
<tbody id="tbody">
<tr id="removable"><td>Teppo</td><td>Teppo@ruotsi.fi</td><td>Osoite B 2</td><td>-</td><td><img id="input-image" width=64px height=64px></td></tr>
<tr id="removable"><td>Seppo</td><td>seppo@suomi.fi</td><td>Osoite A 1</td><td>X</td><td><img id="input-image" width=64px height=64px></td></tr>
  </tbody>
 
  </table>
  
  <form>
  <fieldset>
    <legend>Anna tietosi</legend>
    <br><label for="name">Username</label>
    <input type="text" placeholder="Give me your username plz" id="input-username"></br>
    <br><label>Email</label>
    <input type="email" id="input-email"></br>
    <br><label>Address</label>	
    <input type="text" id="input-address"></br>
    <br><label id="admin">Admin</label>	
    <input type="text" id="input-admin"></br>
    <img id="input-image" height=64px width=64px></br>
    <p><input type="button" id="submit-data" value="Submit">
    <input type="file" id="input-image" accept="image/jpeg, image/png, image/jpg"></p>
  </fieldset>
  
<button id="empty-table">Empty table</button>

</form>

  `;

let aButton = document.getElementById("submit-data");

if (aButton) {
  aButton.addEventListener("click", addRow);
}

function addRown(name, email, address, admin) {
  let nameInput = document.getElementById("input-username");
  let emailInput = document.getElementById("input-email");
  let addressInput = document.getElementById("input-address");
  let adminInput = document.getElementById("input-admin");
  var table = document.getElementById("table1");
  var row = table.insertRow(-1);
  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = email;
  row.insertCell(2).innerHTML = address;
  row.insertCell(3).innerHTML = admin;
}

function addRow() {
  let nameInput = document.getElementById("input-username");
  let emailInput = document.getElementById("input-email");
  let addressInput = document.getElementById("input-address");
  let adminInput = document.getElementById("input-admin");
  var table = document.getElementById("table1");
  /*let i = 0;
  for (i = 0; i < table.length; i++) {
    if (table.contains(nameInput)) {
  var row = table.insertRow(-1);
  var name = (row.insertCell(0).innerHTML = nameInput.value);
  var email = (row[i].insertCell(1).innerHTML = emailInput.value);
  var address = (row[i].insertCell(2).innerHTML = addressInput.value);
  var admin = (row[i].insertCell(3).innerHTML = adminInput.value);
    } else {*/
  var row = table.insertRow(-1);
  var name = (row.insertCell(0).innerHTML = nameInput.value);
  var email = (row.insertCell(1).innerHTML = emailInput.value);
  var address = (row.insertCell(2).innerHTML = addressInput.value);
  var admin = (row.insertCell(3).innerHTML = adminInput.value);
}
//}
//}

let eButton = document.getElementById("empty-table");

if (eButton) {
  var table2 = document.getElementById("table1");

  eButton.addEventListener("click", delRow);
}

function delRow() {
  const table = document.getElementById("table1");
  let i = 0;
  let length = table.length;
  console.log(table.length);

  document.getElementById("table1").deleteRow(0);
  document.getElementById("table1").deleteRow(1);

  for (i = 0; i < length; i++) {
    table.deleteRow(i);
    console.log("Poistettu " + i);
  }

  //table.forEach(delRow + log.console(deleted));
  //while (table.hasAttribute(HTMLTableCellElement) {
  /*while (table.hasAttribute(HTMLTableRowElement)) {
    table.deleteRow(-1);
  }*/
  //document.getElementById("table1").deleteRow(-1);
}

let iButton = document.getElementById("image-input");

if (iButton) {
  var table = document.getElementById("table1");

  const image_input = document.querySelector("#image-input");

  iButton.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector(
        "#image-input"
      ).style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });
}
