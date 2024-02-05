const list = document.querySelector("ul#categories")
const categories = list.children
console.log(categories.length)

for (let i = 0; i < categories.length; i+=1) {
    const list = categories[i].children
    const countOfEachCategory = list[1].children.length
    console.log(list[0].innerHTML)
    console.log(countOfEachCategory)
};