class Lists {
    constructor() {
        this.list = []
        this.initBindingsAndEventListeners()
        this.adapter = new ListsAdapter()
        this.fetchAndLoadLists()
    }
}