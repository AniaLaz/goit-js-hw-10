import './css/styles.css';
import { fetchCountries } from "./fetchCountries";
import debounce from "lodash.debounce"
console.log(debounce);

const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

let name = "";
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('input')

inputEl.addEventListener("input", debounce(onInput,DEBOUNCE_DELAY))

function onInput(e) {
    name = inputEl.value
    console.log('name', name); 
    fetchCountries(name)
    .then(data => {
        console.log("data", data);
        console.log('data.length', data.length);


        const marcup = createMarkup(data)
        countryListEl.innerHTML = marcup;
        const marcupInfo = createMarkupInfo(data)
        countryInfoEl.innerHTML = marcupInfo
    })
    .catch(err => console.log(err))
    console.log("hello");
    }

function  createMarkup(arr) {
    console.log("arr.length", arr.length);
    return arr.map(country => `<li>
    <img src="${country.flags.svg}" alt="flags" class="flag" width = 20 >
    <h2>${country.name.common}</h2>
    </li>`).join('')
}

function createMarkupInfo(arr) {
    return arr.map(country => `<li>
    <img src="${country.flags.svg}" alt="flags" class="flag" width = 20 >
    <h2>${country.name.common}</h2>
    <ul>
    <li>capital ${country.capital}</li>
    <li>population ${country.population}</li>
    <li>languages ${country.languages.value}</li>
    </ul>
    </li>
    `).join('')
}