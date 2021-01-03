class List {
    constructor(listJSON) {
        this.title = listJSON.title
        this.id = listJSON.id
        this.listItems = listJSON.list_items
    }

    renderShow() {
        return `<h3>${this.title}</h3>`
    }

    // render() {
    //     return ```
    //     <li data-listid='${this.id}' data-props='${JSON.stringify(this)} class='list-element'>
    //         <a class="show-link" href='#'>${this.title}</a> 
    //         <button data-action='edit-list'>Edit</button>
    //         <i data-action='delete-list'></i>
    //     </li>
    //     ```
    // }
}