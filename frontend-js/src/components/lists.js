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
        this.lists.map(list => list.renderList())
    }

    addListItem(e) {
        e.preventDefault() //regular behavior will be prevented, no refreshing of the page
        // addNewListItemButton = document.querySelector(`input[button-list-id=${this.id}`)
        // this.addNewListItemButton.addEventListener('submit', this.addListItem.bind(this))
        const newListItem = this.newListItemInput.value
        // this.adapter.createListItem(newListItem).then(this.renderListItem)
        console.log(newListItem)
    }
}

