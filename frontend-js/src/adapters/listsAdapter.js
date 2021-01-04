const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`

class ListsAdapter {
    constructor() {
        this.baseUrl = LISTS_URL
    }

    getLists() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    // createList(title) {
    //     event.preventDefault() //regular behavior will be prevented, no refreshing of the page
    //     const configObj = {
    //         method: "POST", 
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({title})
    //     }
    //     return fetch(this.baseUrl, configObj).then(res => res.json())
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