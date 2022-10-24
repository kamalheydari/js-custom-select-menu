const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const searchInput = wrapper.querySelector("input");
const options = wrapper.querySelector(".options");

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

function addCountry(selectedCountry) {
  options.innerHTML = "";
  
  countries.forEach((country) => {
    let isSelected = country === selectedCountry ? "selected" : "";
    let li = `<li onclick='updateName(this)' class='${isSelected}' >${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();

function updateName(selectedLi) {
  searchInput.value = "";
  addCountry(selectedLi.innerHTML);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup", () => {
  let arr = [];
  let searchedVal = searchInput.value;
  arr = countries
    .filter((data) => data.toLocaleLowerCase().startsWith(searchedVal))
    .map((data) => `<li onclick='updateName(this)' >${data}</li>`)
    .join("");
  options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
