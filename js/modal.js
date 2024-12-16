 // Modal functionality
 const modal = document.getElementById("imageModal");
 const modalImage = document.getElementById("modalImage");
 const modalClose = document.querySelector(".modal-close");

 document.querySelectorAll("img").forEach(img => {
     img.addEventListener("click", () => {
         modal.style.display = "block";
         modalImage.src = img.src;
     });
 });

 modalClose.addEventListener("click", () => {
     modal.style.display = "none";
 });

 modal.addEventListener("click", (e) => {
     if (e.target === modal) {
         modal.style.display = "none";
     }
 });