const categoryItemElements = document.querySelector("ul#categories")
const categories = categoryItemElements.children
console.log(categories.length)

Array.from(categories).forEach(element => {
    const list = element.children
    const countOfEachCategory = list[1].children.length
    console.log(list[0].textContent)
    console.log(countOfEachCategory)
}); 