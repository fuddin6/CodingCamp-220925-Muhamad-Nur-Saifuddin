
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("nameModal");
  const input = document.getElementById("nameInput");
  const btn = document.getElementById("submitName");
  const welcome = document.getElementById("welcome");

  btn.addEventListener("click", () => {
    let nama = input.value.trim();
    if (nama === "") nama = "Guest";
    modal.style.display = "none"; // tutup modal
    welcome.textContent = `Hi, ${nama}`;
  });
});

const input = document.getElementById("nameInput");
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault(); // biar gak reload
    document.getElementById("submitName").click(); // trigger tombol
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-container");

  let scrollAmount = 0.5; 
  let autoScroll;

  function startAutoScroll() {
    autoScroll = setInterval(() => {
      gallery.scrollLeft += scrollAmount;

      if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
        gallery.scrollLeft = 0;
      }
    }, 20); 
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  
  startAutoScroll();

  gallery.addEventListener("mousedown", stopAutoScroll);
  gallery.addEventListener("touchstart", stopAutoScroll);

  gallery.addEventListener("mouseup", startAutoScroll);
  gallery.addEventListener("mouseleave", startAutoScroll);
  gallery.addEventListener("touchend", startAutoScroll);
});
