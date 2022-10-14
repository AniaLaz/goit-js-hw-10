import './css/styles.css';
import { fetchCountries } from "./fetchCountries";

const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

let name = "";
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('input')

inputEl.addEventListener("input", onInput)

function onInput(e) {
    name = inputEl.value
    console.log('name', name); 
    fetchCountries(name)
    .then(data => {
        console.log("data", data)
        const marcup = createMarkup(data)
        console.log("marcup", marcup); 
        countryListEl.innerHTML = marcup
    })
    .catch(err => console.log(err))
    console.log("hello");
    }

function  createMarkup(arr) {
    return arr.map(country => `<li>
    <img src="${country.flags.svg}" alt="flags" class="flag" width = 20 >
    <h2>${country.name.common}</h2>
    </li>`).join('')
}

// function insertAdjacen(e) {
//     countryListEl.insertAdjacentHTML('beforeend', createMarkup(arr)) 
// }