const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`
const LIST_ITEMS_URL = `${BASE_URL}/list_items`
const main = document.querySelector("main")

class ListsAdapter {
    constructor() {
        this.baseUrl = BASE_URL
    }

    getLists() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}