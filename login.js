function login() {

    // Mengambil nilai username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validasi login
    if (username === "admin" && password === "admin123") {
        alert("Login Berhasil!");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("pesan").innerHTML =
            "Username atau Password salah!";
    }
}