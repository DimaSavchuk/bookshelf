var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,r.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r),r("7Pen5"),r("3uZfz");const l=document.querySelector(".category-list");r("j4fn6"),r("3D1e0"),r("j4fn6"),r("iOyVp"),fetch("https://books-backend.p.goit.global/books/category-list").then((e=>e.json())).then((e=>{const o=[];for(const t of e){const e=t.list_name;o.push(e)}console.log(o);const t=o.map((e=>`<li class="category-item">\n        <a class="category-link" href="#">${e}</a>\n        </li>`)).join("");l.insertAdjacentHTML("afterbegin",t)})).catch((e=>{console.error("Сталася помилка при запиті:",e)}));const n={bodyEl:document.querySelector("body"),headerEl:document.querySelector(".header-section"),headerNavLinkEl:document.querySelector(".shopping"),logoLightEl:document.querySelector(".light_icon"),logoDarkEl:document.querySelector(".dark_icon"),titleEl:document.querySelector(".bestsellers-title"),jsCategoryListEl:document.querySelector(".js-category-list"),footerEl:document.querySelector(".footer-js"),logoFooterLightEl:document.querySelector(".light_icon_footer"),logoFooterDarkEl:document.querySelector(".dark_icon_footer"),bookNameEl:document.querySelector(".bestsellers")},c=[n.bodyEl,n.headerEl,n.headerNavLinkEl,n.logoLightEl,n.logoDarkEl,n.titleEl,n.jsCategoryListEl,n.footerEl,n.logoFooterLightEl,n.logoFooterDarkEl,n.bookNameEl],a=document.querySelector(".js-switch-theme");a.addEventListener("click",(function(){if(c.map((e=>e.classList.toggle("dark-theme"))),"true"===localStorage.getItem("dark-theme"))return void localStorage.removeItem("dark-theme");localStorage.setItem("dark-theme",!0)})),localStorage.getItem("dark-theme")&&(a.setAttribute("checked",!0),c.map((e=>e.classList.add("dark-theme"))));
//# sourceMappingURL=index.59901664.js.map