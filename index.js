document.getElementById('toggle').addEventListener('click', clicked);

function clicked() {
    let x = document.getElementById('menusM');
    if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
}