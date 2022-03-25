let link = document.querySelector("a")
let white = document.querySelector(".white")
let grey = document.querySelector(".grey")
let changeImg = document.querySelector(".gr")
let ss = document.querySelector(".img")
let block_1 = document.querySelector(".block_1")
let block_2 = document.querySelector(".block_2")
let block_3 = document.querySelector(".block_3")
let block_4 = document.querySelector(".block_4")
let price = document.querySelector(".bottom")


grey.onclick = () => {
    changeImg.src = "https://mediapark.uz/upload/file/mp/products/obshag/28012.jpg"
    grey.style.background =" rgba(0, 113, 227, 1)"
    grey.style.color = "white"
    white.style.background = "#CFE7FF"
    white.style.color = "#797979"
}
white.onclick = () => {
    changeImg.src = "https://cdn.macbro.uz/macbro/b9c18548-4286-4fd8-91ce-d89903f46e64"
    white.style.background ="rgba(0, 113, 227, 1)"
    white.style.color = "white"
    grey.style.background = "#CFE7FF"
    grey.style.color = "#797979"
}

block_2.onclick = () => {
    price.innerHTML = "$2,199"
}

block_3.onclick = () => {
    price.innerHTML = "$2,599"
}
block_4.onclick = () => {
    price.innerHTML = "$3,199"
}