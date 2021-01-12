const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`
const LIST_ITEMS_URL = `${BASE_URL}/list_items`

class ListsAdapter {
    constructor() {
        this.baseUrl = LISTS_URL
    }

    getLists() {
        return fetch(this.baseUrl).then(res => res.json())
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
        return fetch(LIST_ITEMS_URL, listItemInput)
        .then(res => res.json())
    }
}