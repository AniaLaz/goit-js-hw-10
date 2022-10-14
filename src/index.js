import './css/styles.css';
import { fetchCountries } from "./fetchCountries";
import debounce from "lodash.debounce"
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

let name = "";
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('input')

inputEl.addEventListener("input", debounce(onInput,DEBOUNCE_DELAY))

function onInput(e) {
    name = inputEl.value.trim();
    
        fetchCountries(name)
    .then(data => { 
        console.log("data", data);
        console.log('data.length', data.length);
        console.log('name', name); 
        if(name !== " "){
            if(data.length >= 10){
                Notify.info('Too many matches found. Please enter a more specific name.');
            }
       
            if(data.length > 1 & data.length < 10 ){
    
                const marcup = createMarkup(data)
                countryListEl.innerHTML = marcup;
            }
            
            if(data.length === 1){ 
                countryListEl.innerHTML = '';
                const marcupInfo = createMarkupInfo(data);
                countryInfoEl.innerHTML = marcupInfo}
        }

        else{
            clearMarkup()
}

    })

    .catch(err => {
        clearMarkup();
        Notify.failure('Oops, there is no country with that name')
})

    }

function  createMarkup(arr) {
    console.log("arr.length", arr.length);
    return arr.map(country => `<li>
    <img src="${country.flags.svg}" alt="flags" class="flag" width = 20 >
    <h2>${country.name.common}</h2>
    </li>`).join('')
}

function createMarkupInfo(arr) {
     return arr.map(country =>{ 
        const language = Object.values(country.languages)
    return `<li>
    <img src="${country.flags.svg}" alt="flags" class="flag" width = 20 >
    <h2>${country.name.common}</h2>
    <ul>
    <li>capital: ${country.capital}</li>
    <li>population: ${country.population}</li>
    <li>languages: ${language}</li>
    </ul>
    </li>
    `}).join('')
}


function clearMarkup() {
    countryListEl.innerHTML = '';
    countryInfoEl.innerHTML = '';
}