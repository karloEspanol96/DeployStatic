var toggleBtn = document.getElementById("toggleBtn");
var closeSideBar = document.getElementById("window-block");

toggleBtn.addEventListener("click", openSideBar);
function openSideBar() {
  document.getElementById("side-toggle").style.width = "250px";
  document.getElementById("window-block").style.display = "block";
}

closeSideBar.addEventListener("click", closeToggle);
function closeToggle(e) {
  if (e.target.className === "window-block-during-side-toggle") {
    closeSideBar.style.display = "none";
  }

  document.getElementById("side-toggle").style.width = "0";
}
