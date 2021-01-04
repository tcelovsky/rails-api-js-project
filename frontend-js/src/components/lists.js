const main = document.querySelector("main")
const listsContainer = document.querySelector("#lists-container")

class Lists {
    constructor() {
        this.lists = []
        this.addEventListeners()
        this.adapter = new ListsAdapter()
        // this.loadLists()
    }

    addEventListeners() {
        document.addEventListener("DOMContentLoaded", () => this.loadLists())
        this.newListForm = document.getElementById('new-list-form')
        // this.newListForm.addEventListener('submit',this.addNewList.bind(this))
        // this.listsNode.addEventListener('click',this.handleDeleteList.bind(this))
    }

    loadLists() {
        this.adapter.getLists().then(lists => {
            lists.forEach(list => this.renderList(list))
        })
    }

    renderList(list) {
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        const button = document.createElement("button")
        
        div.setAttribute("id", "list-container")
        div.setAttribute("data-list-id", list.id)
        h3.setAttribute("title-list-id", list.id)
        ul.setAttribute("data-list-id", list.id)
        button.setAttribute("data-list-id", list.id)
        button.innerText = "Add List Item"

        h3.innerText = list.title

        div.appendChild(h3)
        div.appendChild(ul)
        listsContainer.appendChild(div)

        list.list_items.forEach(list_item => this.renderListItem(list_item))
    }

    renderListItem(list_item) {
        const ul = document.querySelector(`ul[data-list-id="${list_item.list_id}"]`)

        const li = document.createElement("li")
        li.setAttribute("data-list_item-id", list_item.id)

        li.innerText = list_item.content

        ul.appendChild(li)        
    }

    // addNewList() {
    //     event.preventDefault()
    //     const title = this.value
    //     this.adapter.createList(title)
    //     .then(res => res.json())
    //   }
}

