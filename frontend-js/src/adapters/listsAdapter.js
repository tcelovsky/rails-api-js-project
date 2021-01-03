const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`
const LIST_ITEMS_URL = `${BASE_URL}/list_items`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => ListsAdapter)

class ListsAdapter {
    constructor() {
        this.baseUrl = LISTS_URL
    }

    loadLists() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    // createList(title) {
    //     const listCreateParams = {
    //         method: "POST", 
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ title })
    //     }
    //     return fetch(this.baseUrl, listCreateParams).then(res => res.json())
    // }

    // deleteList(listId) {
    //     const listDeleteParams = {
    //         method: "DELETE",
    //         headers: {
    //             "Content-type": "application/json"
    //         }
    //     }
    //     return fetch(`${this.baseUrl}/${listId}`, listDeleteParams).then(res => res.json())
    // }
}