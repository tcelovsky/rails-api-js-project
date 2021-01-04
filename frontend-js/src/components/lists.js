const main = document.querySelector("main")
const listsContainer = document.querySelector("#lists-container")

class Lists {
    constructor() {
        this.lists = []
        // this.initBindingsAndEventListeners()
        this.adapter = new ListsAdapter()
        this.loadLists()
    }

    // initBindingsAndEventListeners() {
    //     this.listsForm = document.getElementById('new-list-form')
    //     this.listsInput = document.getElementById('new-list-item')
    //     this.listsNode = document.getElementById('lists-container')
    //     this.listsForm.addEventListener('submit',this.handleAddList.bind(this))
    //     this.listsNode.addEventListener('click',this.handleDeleteList.bind(this))
    // }

    loadLists() {
        this.adapter.getLists().then(lists => {
            lists.forEach(list => this.renderList(list))
        })
    }

    renderList(list) {
        console.log(list)
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        div.setAttribute("id", "list-container")
        div.setAttribute("data-id", list.id)
        h3.setAttribute("data-id", list.id)
        ul.setAttribute("data-id", list.id)

        h3.innerText = list.title
        list.list_items.forEach(list_item => this.renderListItem(list_item))

        h3.appendChild(ul)
        div.appendChild(h3)
        listsContainer.appendChild(div)
    }

    renderListItem(list_item) {
        const li = document.createElement("li")
        li.setAttribute("data-id", list_item.id)

        li.innerText = list_item.content

        const ul = document.querySelector(`div [data-id="${list_item.list_id}]`)
        console.log(ul)
        // ul.appendChild(li)
    }
}

