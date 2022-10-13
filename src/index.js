import './css/styles.css';
import { rezultCountrie } from "./fetchCountries";
let name = "";
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('input')
inputEl.addEventListener("input", onInput)
function onInput() {
    name = inputEl.value
    console.log(name); 
    console.log(rezultCountrie);
    
    }


// function fetchCountries() {
//     const arrCountries = fetch(`https://restcountries.com/v3.1/name/${name}`)
// arrCountries.then( response=> {
// if(!response.ok){
//     throw new Error()
// }
// console.log(response);
// return response.json();
// }).then(data => console.log(data)).catch(err => console.log(err))
// }

