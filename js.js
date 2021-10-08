// For today, understand what all this below means: getElementById, createElement, appendChild
// Finish making the index.html

const app = document.getElementById("app")
console.log("app", app)

const container = document.createElement("div")
container.classList.add("container")

const header = document.createElement("div")
header.classList.add("container__header")
console.log(header)

const a = document.createElement("a")
a.href = "./index.html"
a.innerHTML = "Neumorphism"

header.appendChild(a)
console.log(a)

container.appendChild(header)

console.log(container)

app.appendChild(container)
