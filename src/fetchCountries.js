export function fetchCountries(name) {
    const arrCountries = fetch(`https://restcountries.com/v3.1/name/${name}`)
return arrCountries.then( response=> {
if(!response.ok){
    throw new Error()
}
console.log(response);
return response.json();
})
}
