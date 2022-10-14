export function fetchCountries(name) {
    const arrCountries = fetch(`https://restcountries.com/v3.1/name/${name}`)
return arrCountries.then( response=> {
if(!response.ok){
    throw new Error()
}
console.log(response);
return response.json();
})
// .then(data => console.log(data)).catch(err => console.log(err))
}


// export function fetchCountries(name) {
//     const arrCountries = fetch(`https://restcountries.com/v3.1/name/${name}`)
// arrCountries.then( response=> {
// if(!response.ok){
//     throw new Error()
// }
// console.log(response);
// return response.json();
// }).then(data => console.log(data)).catch(err => console.log(err))
// }


// .then(data => console.log(data)).catch(err => console.log(err))