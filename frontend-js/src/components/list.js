class List {
    constructor(listJSON) {
        this.title = listJSON.title
        this.id = listJSON.id
        this.listItems = listJSON.list_items
        this.adapter = new ListsAdapter()
        this.addBindings()
        this.renderList()
    }

    addBindings() {
        this.listsContainer = document.querySelector(".lists-container")
    }

    renderList() {
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        const form = document.createElement("form")
        const inputText = document.createElement("input")
        const inputButton = document.createElement("input")
        
        div.setAttribute("class", "list-container")
        div.setAttribute("data-list-id", this.id)
        h3.setAttribute("title-list-id", this.id)
        ul.setAttribute("data-list-id", this.id)
        form.setAttribute("id", "new-list-item")
        form.setAttribute("data-list-id", this.id)
        inputText.setAttribute("type", "text")
        inputText.setAttribute("name", "list-item")
        inputText.setAttribute("id", "new-list-item-input")
        inputText.setAttribute("data-list-id", this.id)
        inputButton.setAttribute("button-list-id", this.id)
        inputButton.setAttribute("type", "submit")
        inputButton.setAttribute("value", "Add Item")

        const deleteButton = document.createElement("input")
        deleteButton.setAttribute("button-list-id", this.id)
        deleteButton.setAttribute("type", "submit")
        deleteButton.setAttribute("value", "Delete List")
        deleteButton.setAttribute("class", "delete-list-button")
        deleteButton.addEventListener('click', this.deleteList.bind(this))

        h3.innerText = this.title

        form.appendChild(inputText)
        form.appendChild(inputButton)
        h3.appendChild(deleteButton)
        div.appendChild(h3)
        div.appendChild(ul)
        div.appendChild(form)
        this.listsContainer.appendChild(div)
        
        this.listItems.forEach(listItem => new ListItem (listItem))
        form.addEventListener('submit', this.addListItem.bind(this))
    }

    addListItem(e) {
        e.preventDefault()  
        const newListItemInput = document.querySelector(`input[data-list-id="${this.id}"]`)
        if (newListItemInput.value) {
            const newListItemValue = newListItemInput.value
            const listId = this.id
            const newListItem = {
                listId: listId,
                content: newListItemValue
            }
            this.adapter.createListItem(newListItem)
            .then(json => new ListItem (json))
            newListItemInput.value = ''
         } else {
            newListItemInput.value = ''
         }
    }

    deleteList(e) {
        e.preventDefault()
        const id = this.id
        this.adapter.deleteList(id)
        .then(e.target.parentElement.parentElement.remove())
    }
}