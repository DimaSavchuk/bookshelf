var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var s=o("7Pen5");window.addEventListener("DOMContentLoaded",(e=>{document.querySelector(".layout").classList.add("is-loading"),Promise.all([(0,s.authCheck)()]).then((()=>{const e=document.querySelector(".js-loading"),t=document.querySelector(".layout");e.classList.add("loading-overlay-hide"),t.classList.remove("is-loading")}))})),o("7Pen5"),o("3uZfz"),o("j4fn6");var l=o("iOyVp");let r;const a={sellectedBooksList:document.querySelector(".sellected-books-list"),noBooksSection:document.querySelector(".books-not-available")};function i(){let e=r.map((({_id:e,title:t,author:n,book_image:o,description:s,list_name:l,buy_links:r})=>`<li id="${e}" class="book-item">\n            <img src="${o}" alt="${t}" class="book-image" />\n            <div class="book-info">\n            <div class="book-style">\n            <h2 class="book-title">${t}</h2>\n            \n            <div>\n            <button id="${e}" class="delete-book-button"></button>\n            </div>\n            </div>\n            \n            <p class="book-category">${l}</p>\n            <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>\n            <div class="book-styles">\n            <h3 class="book-author">${n}</h3>\n            <div class="trading-platforms-list list">\n            <a href=""></a>\n            <a href="${r.find((e=>"Amazon"==e.name)).url}" class="amazon" target="_blank" rel="noreferrer noopener"></a>\n            <a href="${r.find((e=>"Apple Books"==e.name)).url}" class="apple" target="_blank" rel="noreferrer noopener"></a>\n            <a href="${r.find((e=>"Bookshop"==e.name)).url}" class="shop" target="_blank" rel="noreferrer noopener"></a>\n            </div>\n            </div>\n            </div>\n        </li>`)).join("");a.sellectedBooksList.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".delete-book-button").forEach((e=>e.addEventListener("click",d)))}function d(e){const t=e.srcElement.id;!function(e){r=r.filter((t=>t._id!==e)),c(l.STORAGE_KEY,r)}(t),function(e){document.getElementById(e.toString()).remove()}(t),!r||r.length<1?(a.noBooksSection.style.display="block",y.style.display="none"):(a.sellectedBooksList.innerHTML="",m.innerHTML="",i(),L(k))}document.addEventListener("DOMContentLoaded",(()=>{r=u(l.STORAGE_KEY),r&&r.length>0?(i(),a.noBooksSection.style.display="none",L(1)):y.style.display="none";const e=document.querySelector(".bestsellers"),t=document.querySelector(".js-home"),n=document.querySelector(".js-shop");e.classList.add("hide"),t.classList.remove("current"),n.classList.add("current")}));const c=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},u=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},m=document.getElementById("pagination-numbers"),b=document.getElementById("paginated-list"),h=document.getElementById("next-button"),p=document.getElementById("prev-button"),y=document.getElementById("pagination-container");let f;const g=window.screen.width>=768?3:4;let v,k;function L(e){f=b.querySelectorAll("li"),v=Math.ceil(f.length/g),v<2?y.style.display="none":(e>v&&(e=v),E(),S(e),p.addEventListener("click",(()=>{S(k-1)})),h.addEventListener("click",(()=>{S(k+1)})),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{S(t)}))})))}const E=()=>{for(let e=1;e<=v;e++)w(e)},w=e=>{const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),m.appendChild(t)},S=e=>{k=e,A(),_();const t=(e-1)*g,n=e*g;f.forEach(((e,o)=>{e.style.display="none",o>=t&&o<n&&(e.style.display="flex")}))};const A=()=>{document.querySelectorAll(".pagination-number").forEach((e=>{e.classList.remove("active");Number(e.getAttribute("page-index"))==k&&e.classList.add("active")}))},B=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},q=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},_=()=>{1===k?B(p):q(p),v===k?B(h):q(h)};o("3D1e0"),o("iOyVp"),o("4TCWA");
//# sourceMappingURL=shoping-list.de0b6768.js.map