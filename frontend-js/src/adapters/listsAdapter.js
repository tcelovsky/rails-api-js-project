const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`

class ListsAdapter {
    constructor() {
        this.baseUrl = LISTS_URL
    }

    getLists() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}