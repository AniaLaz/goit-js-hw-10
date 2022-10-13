export const rezultCountrie = function fetchCountries(name) {
    const arrCountries = fetch(`https://restcountries.com/v3.1/name/${name}`)
arrCountries.then( response=> {
if(!response.ok){
    throw new Error()
}
console.log(response);
fetchCountries()
return response.json();
}).then(data => console.log(data)).catch(err => console.log(err))
}


// const baseURL = 'https://restcountries.com/v3.1/name/peru'

// export const arrCountries = fetchCountries(`${baseURL}`)
   
//     resp.then(arrCountries => console.log(arrCountries))



// const baseURL = 'https://restcountries.com/v3.1/name'


// const arrCountries = fetch(`${baseURL}`)
   
// export const countries = function fetchCountries(){
//     return arrCountries.then( response=> console.log(response))
// }


