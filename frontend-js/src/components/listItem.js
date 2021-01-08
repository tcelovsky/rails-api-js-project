class ListItem {
    constructor(listItemJSON) {
        this.id = listItemJSON.id
        this.content = listItemJSON.content
        this.listId = listItemJSON.list_id
    }

    // renderListItem() {
    //     const ul = document.querySelector(`ul[data-list-id="${this.listId}"]`)

    //     const li = document.createElement("li")
    //     li.setAttribute("data-list_item-id", this.id)

    //     li.innerText = this.content

    //     ul.appendChild(li) 
    // }
}