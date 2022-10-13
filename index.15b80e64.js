const o=function o(n){fetch(`https://restcountries.com/v3.1/name/${n}`).then((n=>{if(!n.ok)throw new Error;return console.log(n),o(),n.json()})).then((o=>console.log(o))).catch((o=>console.log(o)))};let n="";const e=document.querySelector("input");e.addEventListener("input",(function(){n=e.value,console.log(n),console.log(o)}));
//# sourceMappingURL=index.15b80e64.js.map
