const o=function o(e){fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>{if(!e.ok)throw new Error;return console.log(e),o(),e.json()})).then((o=>console.log(o))).catch((o=>console.log(o)))};let e="";const n=document.querySelector("input");n.addEventListener("input",(function(){e=n.value,console.log(e),console.log(o),fetchCountries()}));
//# sourceMappingURL=index.0defc58e.js.map
