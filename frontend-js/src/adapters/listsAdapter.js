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
        const listInput = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({title: newList.title})
        }
        return fetch(this.listsUrl, listInput)
        .then(res => res.json())
    }

    createListItem(newListItem) {
        const listItemInput = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({content: newListItem.content, list_id: newListItem.listId})
        }
        return fetch(this.listItemsUrl, listItemInput)
        .then(res => res.json())
    }

    updateListItem(value, id) {
        const listItemInput = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({content: value, list_id: id})
        }
        return fetch(`${this.listItemsUrl}/${id}`)
        .then(res => res.json())
    }
}