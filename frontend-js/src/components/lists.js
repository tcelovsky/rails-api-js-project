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
        div.setAttribute("data-list-id", list.id)
        h3.setAttribute("title-list-id", list.id)
        ul.setAttribute("data-list-id", list.id)
        
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
}

