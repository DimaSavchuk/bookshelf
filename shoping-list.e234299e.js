var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("7Pen5");window.addEventListener("DOMContentLoaded",(e=>{document.querySelector(".layout").classList.add("is-loading"),Promise.all([(0,i.authCheck)()]).then((()=>{const e=document.querySelector(".js-loading"),t=document.querySelector(".layout");e.classList.add("loading-overlay-hide"),t.classList.remove("is-loading")}))})),n("7Pen5"),n("3uZfz"),n("j4fn6");var l=n("2shzp");let a;const s={sellectedBooksList:document.querySelector(".sellected-books-list"),noBooksSection:document.querySelector(".books-not-available")};function r(e){const t=e.srcElement.id;!function(e){a=a.filter((t=>t._id!==e)),d("ShoppingList",a)}(t),function(e){document.getElementById(e.toString()).remove()}(t),!a||a.length<1?(s.noBooksSection.style.display="block",g.style.display="none"):B()}document.addEventListener("DOMContentLoaded",(()=>{!async function(){try{let e;const t=await l.default.get("https://books-backend.p.goit.global/books/top-books");if(t&&t.data){e=t.data[0].books.map((({_id:e,title:t,author:o,book_image:n,description:i,list_name:l,buy_links:a})=>({_id:e,title:t,author:o,book_image:n,description:i,list_name:l,buy_links:a})))}console.log(e),e&&e.length>0&&d("ShoppingList",e),t.data}catch(e){console.error(e.toJSON())}}(),a=c("ShoppingList"),a&&a.length>0?(function(e){let t=e.map((({_id:e,title:t,author:o,book_image:n,description:i,list_name:l,buy_links:a})=>`<li id="${e}" class="book-item">\n            <img src="${n}" alt="${t}" class="book-image" />\n            <div class="book-info">\n            <div class="book-style">\n            <h2 class="book-title">${t}</h2>\n            \n            <div>\n            <button id="${e}" class="delete-book-button"></button>\n            </div>\n            </div>\n            \n            <p class="book-category">${l}</p>\n            <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>\n            <div class="book-styles">\n            <h3 class="book-author">${o}</h3>\n            <div class="trading-platforms-list list">\n            <a href=""></a>\n            <a href="${a.find((e=>"Amazon"==e.name)).url}" class="amazon"></a>\n            <a href="${a.find((e=>"Apple Books"==e.name)).url}" class="apple"></a>\n            <a href="${a.find((e=>"Bookshop"==e.name)).url}" class="shop"></a>\n            </div>\n            </div>\n            </div>\n        </li>`)).join("");s.sellectedBooksList.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".delete-book-button").forEach((e=>e.addEventListener("click",r)))}(a),s.noBooksSection.style.display="none",h=m.querySelectorAll("li"),y=Math.ceil(h.length/3),y<2?g.style.display="none":(v(),L(1),S(),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{L(t)}))})))):g.style.display="none"}));const d=(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},c=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},u=document.getElementById("pagination-numbers"),m=document.getElementById("paginated-list"),p=document.getElementById("next-button"),b=document.getElementById("prev-button"),g=document.getElementById("pagination-container");let h;let y,f;const v=()=>{for(let e=1;e<=y;e++)k(e)},k=e=>{const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),u.appendChild(t)},L=e=>{f=e,E(),_();const t=3*(e-1),o=3*e;h.forEach(((e,n)=>{e.style.display="none",n>=t&&n<o&&(e.style.display="flex")}))};function S(){b.addEventListener("click",(()=>{L(f-1)})),p.addEventListener("click",(()=>{L(f+1)}))}const E=()=>{document.querySelectorAll(".pagination-number").forEach((e=>{e.classList.remove("active");Number(e.getAttribute("page-index"))==f&&e.classList.add("active")}))},w=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},A=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},_=()=>{1===f?w(b):A(b),y===f?w(p):A(p)},B=()=>{u.innerHTML="",h=m.querySelectorAll("li"),y=Math.ceil(h.length/3),y<2?g.style.display="none":(f>y&&(f=y),v(),L(f),S(),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&(e.addEventListener("click",(()=>{L(t)})),console.log(L(t)))})))};n("3D1e0"),n("iOyVp");
//# sourceMappingURL=shoping-list.e234299e.js.map
