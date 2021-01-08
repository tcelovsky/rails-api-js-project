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
        .then(() => {
            this.renderListItems()
        })
    }

    renderLists() {
        this.lists.map(list => list.renderList()).join('')
    }

    renderListItems() {
        const listItems = []
        this.lists.forEach(list => {
            list.listItems.map(listItem => listItems.push(new ListItem(listItem)))
        })
    }

    // addListItem(e) {
    //     e.preventDefault() //regular behavior will be prevented, no refreshing of the page
    //     const newListItem = this.newListItemInput.value
    //     this.adapter.createListItem(newListItem).then(this.renderListItem)
    // }
}

