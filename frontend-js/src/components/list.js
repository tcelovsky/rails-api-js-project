const listsContainer = document.querySelector("#lists-container")

class List {
    constructor() {
        this.addEventListeners()
        this.adapter = new ListsAdapter()
    }

    addEventListeners() {
        document.addEventListener("DOMContentLoaded", () => this.loadLists())
        this.newListItemInput = document.getElementById("new-list-item-input")
    }

    loadLists() {
        this.adapter.getLists().then(lists => {
            lists.forEach(list => this.renderList(list))
        })
    }

    renderList(list) {
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        const form = document.createElement("form")
        const inputText = document.createElement("input")
        const inputButton = document.createElement("input")
        
        div.setAttribute("id", "list-container")
        div.setAttribute("data-list-id", list.id)
        h3.setAttribute("title-list-id", list.id)
        ul.setAttribute("data-list-id", list.id)
        form.setAttribute("id", "new-list-item")
        inputText.setAttribute("type", "text")
        inputText.setAttribute("name", "list-item")
        inputText.setAttribute("id", "new-list-item-input")
        // inputText.setAttribute("value", "Type List Item")
        inputButton.setAttribute("type", "submit")
        inputButton.setAttribute("value", "Add List Item")
        inputButton.addEventListener("click", this.addListItem)

        h3.innerText = list.title

        form.appendChild(inputText)
        form.appendChild(inputButton)
        div.appendChild(h3)
        div.appendChild(ul)
        div.appendChild(form)
        listsContainer.appendChild(div)

        list.list_items.forEach(list_item => this.renderListItem(list_item))
    }

    renderListItem(list_item) {
        const ul = document.querySelector(`ul[data-list-id="${list_item.list_id}"]`)

        const li = document.createElement("li")
        li.setAttribute("data-list_item-id", list_item.id)

        li.innerText = list_item.content

        ul.appendChild(li)        
    }

    addListItem() {
        event.preventDefault() //regular behavior will be prevented, no refreshing of the page
        const newListItem = this.newListItemInput.value
        this.adapter.createListItem(newListItem).then(this.renderListItem)
    }
}

