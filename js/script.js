// NAVIGATION ACTIVE STATE
const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// SMOOTH TRANSITION (optional effect halaman pindah lebih halus)
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // hanya untuk internal page
    if (href && !href.startsWith("http")) {
      e.preventDefault();
      document.body.style.opacity = "0.3";

      setTimeout(() => {
        window.location.href = href;
      }, 200);
    }
  });
});

// IMAGE POPUP (PROJECT / ABOUT GAMBAR KLIK BESAR)
const images = document.querySelectorAll("img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0,0,0,0.8)";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.style.zIndex = "2000";

    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.maxWidth = "80%";
    bigImg.style.maxHeight = "80%";
    bigImg.style.borderRadius = "15px";
    bigImg.style.border = "3px solid #38bdf8";

    popup.appendChild(bigImg);
    document.body.appendChild(popup);

    popup.addEventListener("click", () => {
      popup.remove();
    });
  });
});