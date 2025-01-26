document.getElementById("profile-icon").addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("hidden");

    event.stopPropagation();
});
    document.addEventListener("click", function (event) {
        const dropdownMenu = document.getElementById("dropdown-menu");

  if (!dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.add("hidden");
  }
});
document.querySelector(".search-bar input[type='text']").addEventListener("focus", function () {
  document.querySelector(".where-dropdown").classList.remove("hidden");
});

document.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".where-dropdown");
  const searchBar = document.querySelector(".search-bar input[type='text']");

  if (!dropdown.contains(e.target) && e.target !== searchBar) {
    dropdown.classList.add("hidden");
  }
});
const suggestionItems = document.querySelectorAll(".suggestion-item");
const whereInput = document.getElementById("where-input");

suggestionItems.forEach((item) => {
    item.addEventListener("click", function () {
        const destinationTitle = this.querySelector(".destination-title").textContent; // Get the destination title
        whereInput.value = destinationTitle; // Set it as the input value
        document.querySelector(".where-dropdown").classList.add("hidden"); // Hide the dropdown
    });
});
function clearSearch() {
  document.getElementById('where-input').value = '';
}
