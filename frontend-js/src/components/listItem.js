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
        li.addEventListener('click', this.toggleListItem.bind(this))

        ul.appendChild(li) 
    }

    toggleListItem(e) {
        e.stopImmediatePropagation()
        const li = e.target
        li.contentEditable = true
        li.focus
        li.removeEventListener('click', this.toggleListItem.bind(this))
        this.body = document.querySelector('body')
        this.body.addEventListener('blur', this.editListItem.bind(this), true)
    }

    editListItem(e) {
        const li = e.target
        li.contentEditable = false
        const newListItemValue = li.innerHTML
        const id = li.dataset.list_item_id
        const updatedListItem = {
            id: id,
            content: newListItemValue
        }
        document.onclick = this.adapter.updateListItem(updatedListItem)
    }
}