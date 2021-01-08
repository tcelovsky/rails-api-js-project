class Lists {
    constructor() {
        this.lists = []
        this.addEventListenersAndBindings()
        this.adapter = new ListsAdapter()
    }

    addEventListenersAndBindings() {
        document.addEventListener("DOMContentLoaded", () => this.loadLists())
        this.newListItemInput = document.getElementById("new-list-item-input")
    }

    loadLists() {
        this.adapter.getLists().then(lists => {
            lists.forEach(list => this.lists.push(new List(list))
            )
        })
        .then(() => {
            this.renderLists()
        })
    }

    renderLists() {
        this.lists.map(list => list.renderList()).join('')
        console.log(this.lists)
        // list.list_items.forEach(list_item => this.renderListItem(list_item))
    }

    // renderListItem(list_item) {
    //     const ul = document.querySelector(`ul[data-list-id="${list_item.list_id}"]`)

    //     const li = document.createElement("li")
    //     li.setAttribute("data-list_item-id", list_item.id)

    //     li.innerText = list_item.content

    //     ul.appendChild(li)        
    // }

    // addListItem(e) {
    //     e.preventDefault() //regular behavior will be prevented, no refreshing of the page
    //     const newListItem = this.newListItemInput.value
    //     this.adapter.createListItem(newListItem).then(this.renderListItem)
    // }
}

