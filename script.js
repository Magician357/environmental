const sidebarEl = document.getElementById("sidebar");
const mainEl = document.getElementById("main");

var sidebarOpen = false;

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  if (sidebarOpen) {
    sidebarEl.style.width = "100px";
    mainEl.style.marginLeft = "110px";
  } else {
    sidebarEl.style.width = "0px";
    mainEl.style.marginLeft = "10px";
  }
}