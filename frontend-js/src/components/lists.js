const listsContainer = document.querySelector("#lists-container")

class Lists {
    constructor() {
        this.addEventListeners()
        this.adapter = new ListsAdapter()
    }

    addEventListeners() {
        document.addEventListener("DOMContentLoaded", () => this.loadLists())
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
        button.setAttribute("button-list-id", list.id)
        button.innerText = "Add List Item"
        button.addEventListener("click", this.addListItem)

        h3.innerText = list.title

        div.appendChild(h3)
        div.appendChild(ul)
        div.appendChild(button)
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

    addListItem(e) {
        e.preventDefault() //regular behavior will be prevented, no refreshing of the page
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({list_id: e.target.dataset.listId})
        }
        fetch(LISTS_URL, configObj).then(res => res.json()).then(json => {
            if (json.message){
                alert(json.message)
            } else {
                this.renderListItem(json).bind(this)
            }
        })
    }
}

