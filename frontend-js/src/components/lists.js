class Lists {
    constructor() {
        this.lists = []
        this.addEventListenersAndBindings()
        this.adapter = new ListsAdapter()
    }

    addEventListenersAndBindings() {
        document.addEventListener("DOMContentLoaded", () => this.loadLists())
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
}

