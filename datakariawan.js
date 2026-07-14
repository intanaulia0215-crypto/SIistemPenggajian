function tambahData() {

    var id = document.getElementById("id").value;
    var nama = document.getElementById("nama").value;
    var jabatan = document.getElementById("jabatan").value;

    if (id == "" || nama == "" || jabatan == "") {
        alert("Semua data harus diisi!");
        return;
    }

    var tabel = document.getElementById("tabel");
    var baris = tabel.insertRow(-1);

    baris.insertCell(0).innerHTML = id;
    baris.insertCell(1).innerHTML = nama;
    baris.insertCell(2).innerHTML = jabatan;
    baris.insertCell(3).innerHTML =
        "<button onclick='tambahData()'>Tambah</button> " 
        "<button onclick='editData(this)'>Edit</button> " +
        "<button onclick='hapusData(this)'>Hapus</button>";

    document.getElementById("id").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("jabatan").value = "";
}

function editData(btn) {

    var baris = btn.parentNode.parentNode;

    document.getElementById("id").value = baris.cells[0].innerHTML;
    document.getElementById("nama").value = baris.cells[1].innerHTML;
    document.getElementById("jabatan").value = baris.cells[2].innerHTML;

    baris.remove();
}

function hapusData(btn) {

    if (confirm("Yakin ingin menghapus data ini?")) {
        btn.parentNode.parentNode.remove();
    }
}

function cariData() {

    var input = document.getElementById("cari").value.toUpperCase();
    var tabel = document.getElementById("tabel");
    var tr = tabel.getElementsByTagName("tr");

    for (var i = 1; i < tr.length; i++) {

        var td = tr[i].getElementsByTagName("td")[1];

        if (td) {
            var txt = td.innerHTML.toUpperCase();

            if (txt.indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}