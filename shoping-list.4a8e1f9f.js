function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"hdJAh":"shoping-list.4a8e1f9f.js","ktvVD":"save-the-children.f9381b56.png","6WPez":"project-hope.963f4a96.png","iseSk":"united24.e2dff383.png","1RFEd":"international-medical-corps.e530dbdc.png","lwHwo":"medecins-sans-frontires.2f9b0157.png","5qiK4":"razom.6dea4c98.png","8kDgw":"action-against-hunger.039ecfd4.png","6gslC":"world-vision.850ac73c.png","hVrDK":"sergiy-prytula.df69e20a.png"}'));const o=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(i("kyEFX").resolve("ktvVD"),import.meta.url).toString()},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(i("kyEFX").resolve("6WPez"),import.meta.url).toString()},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(i("kyEFX").resolve("iseSk"),import.meta.url).toString()},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(i("kyEFX").resolve("1RFEd"),import.meta.url).toString()},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(i("kyEFX").resolve("lwHwo"),import.meta.url).toString()},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(i("kyEFX").resolve("5qiK4"),import.meta.url).toString()},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(i("kyEFX").resolve("8kDgw"),import.meta.url).toString()},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(i("kyEFX").resolve("6gslC"),import.meta.url).toString()},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(i("kyEFX").resolve("hVrDK"),import.meta.url).toString()}],l=document.querySelector(".support-wrapper"),a=document.querySelector(".support-btn");let s=0;l.insertAdjacentHTML("beforeend",o.map((({title:e,url:t,img:r},n)=>`<div class="support-item">\n            <p class="support-number">${(n+1).toString().padStart(2,0)}</p>\n            <a class="support-link" href="${t}">\n              <img src="${r}" alt="${e}" />\n            </a>\n        </div>`)).join("")),a.addEventListener("click",(function(){const e=document.querySelectorAll(".support-item");s+=4,s>=e.length&&(s=0);l.style.transform=`translateY(-${11.2*s}%)`}));
//# sourceMappingURL=shoping-list.4a8e1f9f.js.map
