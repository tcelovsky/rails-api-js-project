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

        li.innerText = this.content
        li.addEventListener('click', this.editListItem.bind(this))

        ul.appendChild(li) 
    }

    editListItem(e) {
        e.stopImmediatePropagation()
        const li = e.target
        li.removeEventListener('click', this.editListItem.bind(this))
        li.contentEditable = true
        li.focus
        const newValue = li.innerHTML
        const id = li.dataset.list_item_id
        document.onclick = this.adapter.updateListItem(newValue, id)
    }
}