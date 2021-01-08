class List {
    constructor(listJSON) {
        this.title = listJSON.title
        this.id = listJSON.id
        this.listItems = listJSON.list_items
    }

    renderList() {
        const listsContainer = document.querySelector("#lists-container")

        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        const form = document.createElement("form")
        const inputText = document.createElement("input")
        const inputButton = document.createElement("input")
        
        div.setAttribute("id", "list-container")
        div.setAttribute("data-list-id", this.id)
        h3.setAttribute("title-list-id", this.id)
        ul.setAttribute("data-list-id", this.id)
        form.setAttribute("id", "new-list-item")
        inputText.setAttribute("type", "text")
        inputText.setAttribute("name", "list-item")
        inputText.setAttribute("id", "new-list-item-input")
        inputButton.setAttribute("type", "submit")
        inputButton.setAttribute("value", "Add List Item")
        // inputButton.addEventListener('submit', this.addListItem)

        h3.innerText = this.title

        form.appendChild(inputText)
        form.appendChild(inputButton)
        div.appendChild(h3)
        div.appendChild(ul)
        div.appendChild(form)
        listsContainer.appendChild(div)
    }
}