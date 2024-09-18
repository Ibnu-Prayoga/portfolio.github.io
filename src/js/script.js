// Menambahkan event listener untuk tombol hamburger
document.getElementById('btn-menu').addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
});
