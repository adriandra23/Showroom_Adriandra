const modal = document.getElementById("adriandra_modal");

function bukaModal(nama, gambar, tahun, transmisi, cc, km, warna, plat, pajak, harga) {
    document.getElementById("modal_title").innerText = nama;
    document.getElementById("modal_img").src = gambar;
    document.getElementById("modal_tahun").innerText = tahun;
    document.getElementById("modal_transmisi").innerText = transmisi;
    document.getElementById("modal_cc").innerText = cc;
    document.getElementById("modal_km").innerText = km;
    document.getElementById("modal_warna").innerText = warna;
    document.getElementById("modal_plat").innerText = plat;
    document.getElementById("modal_pajak").innerText = pajak;
    document.getElementById("modal_price").innerText = harga;
    
    modal.style.display = "block";
}

function tutupModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Ini buat ngirim isi form kontak langsung ke WhatsApp
function kirimWhatsApp(event) {
    event.preventDefault(); // Biar halaman nggak refresh sendiri pas tombol diklik

    // Ganti nomor di bawah ini pakai nomor WA asli showroom (wajib diawali 62, bukan 0)
    const nomorWA = "6281234567890";

    // Ngambil teks yang diketik pembeli di form
    const nama = document.getElementById("nama_pengirim").value;
    const mobil = document.getElementById("pilihan_mobil").value;
    const keperluan = document.getElementById("jenis_layanan").value;
    const pesan = document.getElementById("isi_pesan").value;

    // Ngerangkai format pesan WhatsApp-nya
    const teksWA = `Halo Showroom Ade Perum,%0A%0A` +
                   `Nama: *${nama}*%0A` +
                   `Unit Diminati: *${mobil}*%0A` +
                   `Keperluan: *${keperluan}*%0A` +
                   `Pesan: ${pesan}`;

    // Buka WhatsApp Web atau aplikasi WA di HP
    const urlWA = `https://wa.me/${nomorWA}?text=${teksWA}`;
    window.open(urlWA, "_blank");
}