function toggleNav(x) {
  x.classList.toggle("change");

  if (x.classList.contains("change")) {
    document.getElementById("navigationBar").style.display = "block";
  } else {
    document.getElementById("navigationBar").style.display = "none";
  }
}

// function closeNav() {
//     document.getElementById("navigationBar").style.display = "none";
//   }
