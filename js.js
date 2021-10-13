// Object with few properties
const App = {
  // Run this function to start the app: App.init()
  init() {
    console.log("Start the engines")

    // this: the context of the Object/function/class
    console.log("->", this)

    this.controllers.createStaticElements()

    console.log("Finished")
  },

  // Here is where we keep our app variables
  state: {
    navChild: [{ text: "Button" }, { text: "Accordion" }, { text: "Input" }],
  },

  // Here is the place where we control our App
  controllers: {
    createButtonContent() {
      const button = document.createElement("button")
      button.innerHTML = "Button"
      button.classList.add("button")
      App.elements.content.appendChild(button)
    },
    createAccordionContent() {
      const details = document.createElement("details")
      const summary = document.createElement("summary")
      const details_child = document.createElement("p")

      details_child.innerHTML = "details_child"
      summary.innerHTML = "summary"

      details.classList.add("details")
      summary.classList.add("summary")
      details_child.classList.add("details_child")

      details.appendChild(summary)
      details.appendChild(details_child)
      App.elements.content.appendChild(details)
    },
    createInputContent() {
      const input = document.createElement("input")
      input.classList.add("input")

      input.setAttribute("type", "text")
      input.setAttribute("name", "name")
      input.setAttribute("placeholder", "placeholder")

      App.elements.content.appendChild(input)
    },

    // Render dynamically the elements
    showElement(child) {
      console.log("lets render", child)
      document.title = child.text

      // Clear the previous content
      App.elements.content.innerHTML = ""
      App.elements.content.style.border = "none"

      switch (child.text) {
        case "Button":
          App.controllers.createButtonContent()
          break

        case "Accordion":
          App.controllers.createAccordionContent()
          break

        case "Input":
          App.controllers.createInputContent()
          break

        default:
          break
      }
    },

    createStaticElements() {
      const els = App.elements

      console.log("Create static elements")

      // containerにclassname = containerを追加
      els.container.classList.add("container")
      // headerにclass =main_contentを追加
      els.container.classList.add("main_content")
      console.log("container", els.container)

      // headerにclass = container__headerを追加
      els.header.classList.add("container__header")
      console.log("header", els.header)

      // リンクを追加
      els.a.href = "./index.html"
      // 文字列追加
      els.a.innerHTML = "Neumorphism"
      console.log("a", els.a)

      // 文字列追加
      els.messageJa.innerHTML = "各ページへのリンク"

      // 文字列追加
      els.messageEn.innerHTML = "Link to each page"

      // navにclass= container__navを追加
      els.nav.classList.add("container__nav")

      for (let i = 0; i < App.state.navChild.length; i++) {
        const child = App.state.navChild[i]

        const item = document.createElement("span")
        item.classList.add("nav__child")
        item.innerHTML = child.text
        item.onclick = () => {
          App.controllers.showElement(child)
        }

        els.nav.appendChild(item)
      }

      els.content.classList.add("container__content")

      // headerのchildにa追加
      els.header.appendChild(els.a)

      // mainのchildに追加
      els.main.appendChild(els.messageJa)
      els.main.appendChild(els.messageEn)
      els.main.appendChild(els.nav)

      // containerのchildにheader追加
      els.container.appendChild(els.header)
      els.container.appendChild(els.main)
      els.container.appendChild(els.content)
      els.app.appendChild(els.container)

      console.log("Done")
    },
  },

  // We will keep here all our references
  elements: {
    app: document.getElementById("app"),
    container: document.createElement("div"),
    header: document.createElement("div"),
    a: document.createElement("a"),
    main: document.createElement("main"),
    messageJa: document.createElement("p"),
    messageEn: document.createElement("p"),
    nav: document.createElement("nav"),
    content: document.createElement("div"),
  },
}

App.init()

// // Arraydeclaration;
// let nav__child = []

// // // aタグを追加
// // nav__child[0] = document.createElement("a");
// // // リンクを追加
// // nav__child[0].href = nav__list[0].link;
// // // 文字列追加
// // nav__child[0].innerHTML = nav__list[0].text;

// // // aタグを追加
// // nav__child[1] = document.createElement("a");
// // // リンクを追加
// // nav__child[1].href = nav__list[1].link;
// // // 文字列追加
// // nav__child[1].innerHTML = nav__list[1].text;

// // // aタグを追加
// // nav__child[2] = document.createElement("a");
// // // リンクを追加
// // nav__child[2].href = nav__list[2].link;
// // // 文字列追加
// // nav__child[2].innerHTML = nav__list[2].text;

// // navのchildにheader追加

// console.log("🐕", nav)
