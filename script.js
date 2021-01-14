let selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}
// Read operation using this function
function readFormData() {
  let formData = {};
  formData["nama"] = document.getElementById("nama").value;
  formData["harga"] = document.getElementById("harga").value;
  formData["telepon"] = document.getElementById("telepon").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

// Create operation
function insertNewRecord(data) {
  let table = document
    .getElementById("obatList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.nama;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.harga;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.telepon;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("telepon").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

// For Edit operation
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nama").value = selectedRow.cells[0].innerHTML;
  document.getElementById("harga").value = selectedRow.cells[1].innerHTML;
  document.getElementById("telepon").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.nama;
  selectedRow.cells[1].innerHTML = formData.harga;
  selectedRow.cells[2].innerHTML = formData.telepon;
  selectedRow.cells[3].innerHTML = formData.city;
}
function onDelete(td) {
  if (confirm("Kamu yakin ingin menghapus data ini?")) {
    row = td.parentElement.parentElement;
    document.getElementById("obatList").deleteRow(row.rowIndex);
    resetForm();
  }
}
