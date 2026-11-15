function cekNama() {
    let nama =
document.getElementById("nama").value.trim();

if (nama === "Anntiqa Kewining Putih") {
    window.location.href="tika.html";
}

else if (nama === "Dzakirah Nur Ramadhani") {
    window.location.href="kirah.html";
}

else if (nama === "Firza Aulia Nurazizah") {
    window.location.href="pijar.html";
}

else {
    document.getElementById("pesan").innerText="LAUU SAPE MPRUYY 🤨🤨";
}


}