var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var s={id:e,exports:{}};return o[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("7Pen5"),n("3uZfz"),n("j4fn6");var s=n("2shzp");let i;const l={sellectedBooksList:document.querySelector(".sellected-books-list"),noBooksSection:document.querySelector(".books-not-available")};function a(e){const o=e.srcElement.id;!function(e){i=i.filter((o=>o._id!==e)),r("ShoppingList",i)}(o),function(e){document.getElementById(e.toString()).style.display="none"}(o),(!i||i.length<1)&&(l.noBooksSection.style.display="block")}document.addEventListener("DOMContentLoaded",(()=>{!async function(){try{let e;const o=await s.default.get("https://books-backend.p.goit.global/books/top-books");if(o&&o.data){e=o.data[0].books.map((({_id:e,title:o,author:t,book_image:n,description:s,list_name:i,buy_links:l})=>({_id:e,title:o,author:t,book_image:n,description:s,list_name:i,buy_links:l})))}console.log(e),e&&e.length>0&&r("ShoppingList",e),o.data}catch(e){console.error(e.toJSON())}}(),i=d("ShoppingList"),i&&i.length>0&&(function(e){let o=e.map((({_id:e,title:o,author:t,book_image:n,description:s,list_name:i,buy_links:l})=>`<li id="${e}" class="book-item">\n            <img src="${n}" alt="${o}" class="book-image" />\n            <div class="book-info">\n            <div class="book-style">\n            <h2 class="book-title">${o}</h2>\n            \n            <div>\n            <button id="${e}" class="delete-book-button"></button>\n            </div>\n            </div>\n            \n            <p class="book-category">${i}</p>\n            <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>\n            <div class="book-styles">\n            <h3 class="book-author">${t}</h3>\n            <div class="trading-platforms-list list">\n            <a href=""></a>\n            <a href="${l.find((e=>"Amazon"==e.name)).url}" class="amazon"></a>\n            <a href="${l.find((e=>"Apple Books"==e.name)).url}" class="apple"></a>\n            <a href="${l.find((e=>"Bookshop"==e.name)).url}" class="shop"></a>\n            </div>\n            </div>\n            </div>\n        </li>`)).join("");l.sellectedBooksList.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".delete-book-button").forEach((e=>e.addEventListener("click",a)))}(i),l.noBooksSection.style.display="none")}));const r=(e,o)=>{try{const t=JSON.stringify(o);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},d=e=>{try{const o=localStorage.getItem(e);return null===o?void 0:JSON.parse(o)}catch(e){console.error("Get state error: ",e.message)}};n("3D1e0"),n("iOyVp");
//# sourceMappingURL=shoping-list.55e3e9ba.js.map
