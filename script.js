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
// fungsi read data dari table
function readFormData() {
  let formData = {};
  formData["kodeobat"] = document.getElementById("kodeobat").value;
  formData["nama"] = document.getElementById("nama").value;
  formData["harga"] = document.getElementById("harga").value;
  formData["stock"] = document.getElementById("stock").value;
  formData["koderesep"] = document.getElementById("koderesep").value;
  formData["tgl"] = document.getElementById("tgl").value;
  formData["diagnosis"] = document.getElementById("diagnosis").value;
  formData["dokter"] = document.getElementById("dokter").value;
  formData["keterangan"] = document.getElementById("keterangan").value;
  return formData;
}

// fungsi edit
function insertNewRecord(data) {
  let table = document
    .getElementById("obatList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);

  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.kodeobat;

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.nama;

  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.harga;

  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.stock;

  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.koderesep;

  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.tgl;

  let cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.diagnosis;

  let cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.dokter;

  let cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.keterangan;

  let cell10 = newRow.insertCell(9);
  cell10.innerHTML = `<butoon class="btn btn-warning"onClick='onEdit(this)'>Edit</butoon>
                        <button class="btn btn-danger"onClick='onDelete(this)'>Delete</button>`;
}

// fungsi untuk mereset form ketika sudah disubmit
function resetForm() {
  document.getElementById("kodeobat").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("koderesep").value = "";
  document.getElementById("tgl").value = "";
  document.getElementById("diagnosis").value = "";
  document.getElementById("dokter").value = "";
  document.getElementById("keterangan").value = "";
  selectedRow = null;
}

// fungsi untuk edit
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("kodeobat").value = selectedRow.cells[0].innerHTML;
  document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
  document.getElementById("harga").value = selectedRow.cells[2].innerHTML;
  document.getElementById("stock").value = selectedRow.cells[3].innerHTML;
  document.getElementById("koderesep").value = selectedRow.cells[4].innerHTML;
  document.getElementById("tgl").value = selectedRow.cells[5].innerHTML;
  document.getElementById("diagnosis").value = selectedRow.cells[6].innerHTML;
  document.getElementById("dokter").value = selectedRow.cells[7].innerHTML;
  document.getElementById("keterangan").value = selectedRow.cells[8].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.kodeobat;
  selectedRow.cells[1].innerHTML = formData.nama;
  selectedRow.cells[2].innerHTML = formData.harga;
  selectedRow.cells[3].innerHTML = formData.stock;
  selectedRow.cells[4].innerHTML = formData.koderesep;
  selectedRow.cells[5].innerHTML = formData.tgl;
  selectedRow.cells[6].innerHTML = formData.diagnosis;
  selectedRow.cells[7].innerHTML = formData.dokter;
  selectedRow.cells[8].innerHTML = formData.keterangan;
}
function onDelete(td) {
  if (confirm("Kamu yakin ingin menghapus data ini?")) {
    row = td.parentElement.parentElement;
    document.getElementById("obatList").deleteRow(row.rowIndex);
    resetForm();
  }
}
