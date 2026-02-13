// Ambil komentar dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  const daftarKomentar = document.getElementById("daftarKomentar");
  const komentarTersimpan = JSON.parse(localStorage.getItem("komentarList")) || [];

  komentarTersimpan.forEach(komentar => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${komentar.nama}</strong> 
      <small class="text-info">(${komentar.email})</small><br>
      <span>${komentar.pesan}</span>
    `;
    div.classList.add("border", "rounded", "p-2", "mb-2", "bg-dark", "text-light");
    daftarKomentar.appendChild(div);
  });
});

// Menangani submit form
document.getElementById("komentarForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua kolom wajib diisi!");
    return;
  }

  if (!email.includes("@")) {
    alert("Email tidak valid!");
    return;
  }

  const daftarKomentar = document.getElementById("daftarKomentar");

  // Membuat elemen komentar baru
  const komentarBaru = document.createElement("div");
  komentarBaru.classList.add("border", "rounded", "p-2", "mb-2", "bg-dark", "text-light");
  komentarBaru.innerHTML = `
    <strong>${nama}</strong> <small class="text-info">(${email})</small><br>
    <span>${pesan}</span>
  `;

  // Tampilkan di paling atas
  daftarKomentar.prepend(komentarBaru);

  // Simpan ke localStorage
  const komentarTersimpan = JSON.parse(localStorage.getItem("komentarList")) || [];
  komentarTersimpan.unshift({ nama, email, pesan });
  localStorage.setItem("komentarList", JSON.stringify(komentarTersimpan));

  // Reset form
  document.getElementById("komentarForm").reset();
});