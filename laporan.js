let data = JSON.parse(localStorage.getItem("penggajian")) || [];

let tabel = document.querySelector("table");

data.forEach((item, index) => {
    let row = tabel.insertRow();

    row.insertCell(0).innerHTML = index + 1;
    row.insertCell(1).innerHTML = item.id;
    row.insertCell(2).innerHTML = item.nama;
    row.insertCell(3).innerHTML = item.gajiPokok;
    row.insertCell(4).innerHTML = item.tunjangan;
    row.insertCell(5).innerHTML = item.totalGaji;
});