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

    // createListItem(newListItemInput) {
    //     const listItem = {
    //         content: newListItemInput
    //     }
    //     const configObj = {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Accept": "application/json"
    //         },
    //         body: JSON.stringify({newListItemInput})
    //       }
    //       return fetch(LIST_ITEMS_URL, configObj).then(res => res.json())
    // }
    createListItem(newListItemInput) {
        const listItemInput = {
            content: newListItemInput
        }
        return fetch(LIST_ITEMS_URL), {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({content: listItemInput})
            .then(console.log(listItemInput))
            // .then(res => res.json())
        }
    }
}