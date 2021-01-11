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
            content: newListItem.content,
            listId: newListItem.listId
        }
        return fetch(LIST_ITEMS_URL), {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({content: listItemInput.content, listId: listItemInput.listId})
            .then(console.log(listItemInput))
            // .then(res => res.json())
        }
    }
}