let saveEl = document.getElementById("save-el")
let countPeep = document.getElementById("count-people") // pass in argument
let count = 0

function increment() {
    count += 1
    countPeep.textContent = count
}

function save() {
    let dashSeparator = count + " - "
    saveEl.textContent += dashSeparator
   console.log(count)
   countPeep.textContent = 0
   count = 0
}
