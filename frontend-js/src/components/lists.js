class Lists {
    constructor() {
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
        this.adapter.getLists()
        .then(lists => {
            lists.forEach(list => new List (list))
        })
    }

    addList(e) {
        e.preventDefault()
        if (this.newListInput.value) {
           const newListValue = this.newListInput.value
            const newList = {
                title: newListValue
            }
            this.adapter.createList(newList)
            .then(list => new List (list))
            this.newListInput.value = '' 
        } else {
            this.newListInput.value = ''
        }
    }
}

