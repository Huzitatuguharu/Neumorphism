// For today, understand what all this below means: getElementById, createElement, appendChild
// Finish making the index.html

const app = document.getElementById("app");
console.log("app", app);

// divタグを追加
const container = document.createElement("div");
// containerにclassname = containerを追加
container.classList.add("container");

// divタグを追加
const header = document.createElement("div");
// headerにclass = container__headerを追加
header.classList.add("container__header");
console.log(header);

// aタグを追加
const a = document.createElement("a");
// リンクを追加
a.href = "./index.html";
// 文字列追加
a.innerHTML = "Neumorphism";

// headerのchildにa追加
header.appendChild(a);
console.log(a);

// mainタグを追加
const main = document.createElement("main");
// headerにclass =main_contentを追加
container.classList.add("main_content");

// pタグを追加
const massage_ja = document.createElement("p");
// 文字列追加
massage_ja.innerHTML = "各ページへのリンク";

// pタグを追加
const massage_en = document.createElement("p");
// 文字列追加
massage_en.innerHTML = "Link to each page";

// navタグを追加
const nav = document.createElement("nav");
// navにclass= container__navを追加
nav.classList.add("container__nav");

const nav__list = [
  {
    link: "button.html",
    text: "Button",
  },
  {
    link: "accordion.html",
    text: "Accordion",
  },
  {
    link: "input.html",
    text: "Input",
  },
];

// Arraydeclaration;
let nav__child = [];

// // aタグを追加
// nav__child[0] = document.createElement("a");
// // リンクを追加
// nav__child[0].href = nav__list[0].link;
// // 文字列追加
// nav__child[0].innerHTML = nav__list[0].text;

// // aタグを追加
// nav__child[1] = document.createElement("a");
// // リンクを追加
// nav__child[1].href = nav__list[1].link;
// // 文字列追加
// nav__child[1].innerHTML = nav__list[1].text;

// // aタグを追加
// nav__child[2] = document.createElement("a");
// // リンクを追加
// nav__child[2].href = nav__list[2].link;
// // 文字列追加
// nav__child[2].innerHTML = nav__list[2].text;


// navのchildにheader追加

for (let i = 0; i < nav__list.length; i++) {
  // aタグを追加
  nav__child[i] = document.createElement("a");
  // リンクを追加
  nav__child[i].href = nav__list[i].link;
  // 文字列追加
  nav__child[i].innerHTML = nav__list[i].text;
  console.log(nav__list[i]);
  nav.appendChild(nav__child[i]);
}
console.log("🐕", nav);

// mainのchildに追加
main.appendChild(massage_ja);
main.appendChild(massage_en);
main.appendChild(nav);

// containerのchildにheader追加
container.appendChild(header);
container.appendChild(main);

console.log(container);

app.appendChild(container);
