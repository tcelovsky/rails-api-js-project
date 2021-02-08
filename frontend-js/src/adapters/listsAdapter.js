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

    // updateListItem(updatedListItem) {
    //     const formData = {
    //         content: updatedListItem.content, 
    //         id: updatedListItem.id
    //     }
    //     const configObj = {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     }
    //     return fetch(`${this.listItemsUrl}/${updatedListItem.id}`, configObj)
    //     .then(res => res.json())
    //     .catch(function(error) {    
    //         alert("Issue with Fetch");    
    //         console.log(error.message);  
    //     });
    // }
}