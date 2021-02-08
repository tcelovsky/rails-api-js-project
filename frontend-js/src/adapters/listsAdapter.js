const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`
const LIST_ITEMS_URL = `${BASE_URL}/list_items`

class ListsAdapter {
    constructor() {
        this.listsUrl = LISTS_URL
        this.listItemsUrl = LIST_ITEMS_URL
    }

    getLists() {
        return fetch(this.listsUrl).then(res => res.json())
    }

    createList(newList) {
        const formData = {
            title: newList.title
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        return fetch(this.listsUrl, configObj)
        .then(res => res.json())
    }

    createListItem(newListItem) {
        const formData = {
            content: newListItem.content, 
            list_id: newListItem.listId
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        return fetch(this.listItemsUrl, configObj)
        .then(res => res.json())
    }

    deleteListItem(id) {
        const formData = {
            id: id
        }
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        return fetch(`${this.listItemsUrl}/${id}`, configObj)
    }
}