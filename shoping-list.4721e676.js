!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var r=a("kZtGT");window.addEventListener("DOMContentLoaded",(function(e){document.querySelector(".layout").classList.add("is-loading"),Promise.all([(0,r.authCheck)()]).then((function(){var e=document.querySelector(".js-loading"),t=document.querySelector(".layout");e.classList.add("loading-overlay-hide"),t.classList.remove("is-loading")}))})),a("kZtGT"),a("9Z1ug"),a("5iK4t");var i,s=a("bpxeT"),l=a("2TvXO"),c=a("dIxxU"),d="https://books-backend.p.goit.global/books/top-books",u="ShoppingList",f={sellectedBooksList:document.querySelector(".sellected-books-list"),noBooksSection:document.querySelector(".books-not-available")};function h(e){var t=e.srcElement.id;!function(e){i=i.filter((function(t){return t._id!==e})),v(u,i)}(t),function(e){document.getElementById(e.toString()).style.display="none"}(t),(!i||i.length<1)&&(f.noBooksSection.style.display="block")}function p(){return(p=e(s)(e(l).mark((function t(){var o,n,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,c.default.get("".concat(d));case 4:return(n=e.sent)&&n.data&&(a=n.data[0].books,o=a.map((function(e){return{_id:e._id,title:e.title,author:e.author,book_image:e.book_image,description:e.description,list_name:e.list_name,buy_links:e.buy_links}}))),console.log(o),o&&o.length>0&&v(u,o),e.abrupt("return",n.data);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.toJSON());case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){var e;!function(){p.apply(this,arguments)}(),(i=b(u))&&i.length>0&&(e=i.map((function(e){var t=e._id,o=e.title,n=e.author,a=e.book_image,r=(e.description,e.list_name),i=e.buy_links,s=i.find((function(e){return"Amazon"==e.name})).url,l=i.find((function(e){return"Apple Books"==e.name})).url,c=i.find((function(e){return"Bookshop"==e.name})).url;return'<li id="'.concat(t,'" class="book-item">\n            <img src="').concat(a,'" alt="').concat(o,'" class="book-image" />\n            <div class="book-info">\n            <div class="book-style">\n            <h2 class="book-title">').concat(o,'</h2>\n            \n            <div>\n            <button id="').concat(t,'" class="delete-book-button"></button>\n            </div>\n            </div>\n            \n            <p class="book-category">').concat(r,'</p>\n            <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>\n            <div class="book-styles">\n            <h3 class="book-author">').concat(n,'</h3>\n            <div class="trading-platforms-list list">\n            <a href=""></a>\n            <a href="').concat(s,'" class="amazon"></a>\n            <a href="').concat(l,'" class="apple"></a>\n            <a href="').concat(c,'" class="shop"></a>\n            </div>\n            </div>\n            </div>\n        </li>')})).join(""),f.sellectedBooksList.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".delete-book-button").forEach((function(e){return e.addEventListener("click",h)})),f.noBooksSection.style.display="none")}));var v=function(e,t){try{var o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},b=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};a("jn6s9"),a("79s99")}();
//# sourceMappingURL=shoping-list.4721e676.js.map