function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    <span class="item-text">${item.text}</span>
    <div>
      <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
      <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
    </div>
  </li>`
}

let ourHTML = items.map(function(item) {
    return itemTemplate(item)
}).join('')
document.getElementById("item-list").insertAdjacentHTML("beforeend", ourHTML)

let createField = document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault()
    axios.post('/create-item', {text: createField.value}).then(function(response) {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
        createField.value=""
        createField.focus()
    }).catch(function() {
        console.log("Nepovedlo se")
    })
})


document.addEventListener("click", function(e) {

    if (e.target.classList.contains("delete-me")) {
        if (confirm("Are you sure about this?")) {
            axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function() {
                e.target.parentElement.parentElement.remove()
            }).catch(function() {
                console.log("Nepovedlo se")
            })
        }
    }


    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("type-in your changes", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
        if (userInput) {
            axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function() {
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
            }).catch(function() {
                console.log("Nepovedlo se")
            })
        }
    }
})