const main = document.querySelector("main")
const listContainer = document.querySelector("#list-container")

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
        listContainer.setAttribute("data-id", list.id)
        const h3 = document.createElement("h3")

        h3.innerText = list.title
        list.list_items.forEach(list_item => this.renderListItem(list_item))
        listContainer.appendChild(h3)
    }

    renderListItem(list_item) {
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        li.setAttribute("data-id", list_item.id)

        li.innerText = list_item.content
        ul.appendChild(li)
        h3.appendChild(ul)
    }
}

