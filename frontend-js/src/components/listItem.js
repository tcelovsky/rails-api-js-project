class ListItem {
    constructor(listItemJSON) {
        this.id = listItemJSON.id
        this.content = listItemJSON.content
        this.listId = listItemJSON.list_id
        this.renderListItem()
    }

    renderListItem() {
        const ul = document.querySelector(`ul[data-list-id="${this.listId}"]`)

        const li = document.createElement("li")
        li.setAttribute("data-list_item-id", this.id)

        li.innerText = this.content
        li.addEventListener('click', this.editListItem.bind(this))

        ul.appendChild(li) 
    }

    editListItem(e) {
        console.log(e.target)
    }
}