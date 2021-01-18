class Lists {
    constructor() {
        this.lists = []
        this.addEventListenersAndBindings()
        this.adapter = new ListsAdapter()
    }

    addEventListenersAndBindings() {
        document.addEventListener("DOMContentLoaded", () => this.loadLists())
        this.newListInput = document.getElementById("new-list-title")
        this.newListForm = document.getElementById("new-list-form")
        this.newListForm.addEventListener('submit', this.addList.bind(this))
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

    addList(e) {
        e.preventDefault()
        const newListValue = this.newListInput.value
        const newList = {
            title: newListValue
        }
        this.adapter.createList(newList)
        .then(list => this.lists.push(new List(list)))
        this.newListInput.value = ''
        this.renderLists()
    }
}

