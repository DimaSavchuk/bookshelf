!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a("kZtGT"),a("9Z1ug"),a("5iK4t");var r,i=a("bpxeT"),s=a("2TvXO"),l=a("dIxxU"),c="https://books-backend.p.goit.global/books/top-books",d="ShoppingList",u={sellectedBooksList:document.querySelector(".sellected-books-list"),noBooksSection:document.querySelector(".books-not-available")};function f(e){var t=e.srcElement.id;!function(e){r=r.filter((function(t){return t._id!==e})),h(d,r)}(t),function(e){document.getElementById(e.toString()).style.display="none"}(t),(!r||r.length<1)&&(u.noBooksSection.style.display="block")}function p(){return(p=e(i)(e(s).mark((function t(){var n,o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,l.default.get("".concat(c));case 4:return(o=e.sent)&&o.data&&(a=o.data[0].books,n=a.map((function(e){return{_id:e._id,title:e.title,author:e.author,book_image:e.book_image,description:e.description,list_name:e.list_name,buy_links:e.buy_links}}))),console.log(n),n&&n.length>0&&h(d,n),e.abrupt("return",o.data);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.toJSON());case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){var e;!function(){p.apply(this,arguments)}(),(r=b(d))&&r.length>0&&(e=r.map((function(e){var t=e._id,n=e.title,o=e.author,a=e.book_image,r=(e.description,e.list_name),i=e.buy_links,s=i.find((function(e){return"Amazon"==e.name})).url,l=i.find((function(e){return"Apple Books"==e.name})).url,c=i.find((function(e){return"Bookshop"==e.name})).url;return'<li id="'.concat(t,'" class="book-item">\n            <img src="').concat(a,'" alt="').concat(n,'" class="book-image" />\n            <div class="book-info">\n            <div class="book-style">\n            <h2 class="book-title">').concat(n,'</h2>\n            \n            <div>\n            <button id="').concat(t,'" class="delete-book-button"></button>\n            </div>\n            </div>\n            \n            <p class="book-category">').concat(r,'</p>\n            <p class="book-description">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>\n            <div class="book-styles">\n            <h3 class="book-author">').concat(o,'</h3>\n            <div class="trading-platforms-list list">\n            <a href=""></a>\n            <a href="').concat(s,'" class="amazon"></a>\n            <a href="').concat(l,'" class="apple"></a>\n            <a href="').concat(c,'" class="shop"></a>\n            </div>\n            </div>\n            </div>\n        </li>')})).join(""),u.sellectedBooksList.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".delete-book-button").forEach((function(e){return e.addEventListener("click",f)})),u.noBooksSection.style.display="none")}));var h=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},b=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};a("jn6s9"),a("79s99")}();
//# sourceMappingURL=shoping-list.4fc75a1d.js.map
