class ListItem {
    constructor(listItemJSON) {
        this.id = listItemJSON.id
        this.content = listItemJSON.content
        this.listId = listItemJSON.list_id
        this.adapter = new ListsAdapter()
        this.renderListItem()
    }

    renderListItem() {
        const ul = document.querySelector(`ul[data-list-id="${this.listId}"]`)

        const li = document.createElement("li")
        li.setAttribute("data-list_item_id", this.id)
        li.setAttribute("data-list_id", this.listId)
        li.innerText = this.content

        const deleteButton = document.createElement("input")
        deleteButton.setAttribute("button-list-item-id", this.id)
        deleteButton.setAttribute("type", "submit")
        deleteButton.setAttribute("value", "Delete List Item")
        deleteButton.addEventListener('click', this.deleteListItem.bind(this))

        li.appendChild(deleteButton)
        ul.appendChild(li) 
    }

    deleteListItem(e) {
        e.preventDefault()
        const id = this.id
        this.adapter.deleteListItem(id)
        .then(e.target.parentElement.remove())
    }
}