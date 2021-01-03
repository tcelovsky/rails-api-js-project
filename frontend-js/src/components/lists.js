class Lists {
    constructor() {
        this.list = []
        // this.initBindingsAndEventListeners()
        this.adapter = new ListsAdapter()
        // this.fetchAndLoadLists()
    }

    // initBindingsAndEventListeners() {
    //     this.listsForm = document.getElementById('new-list-form')
    //     this.listsInput = document.getElementById('new-list-item')
    //     this.listsNode = document.getElementById('lists-container')
    //     this.listsForm.addEventListener('submit',this.handleAddList.bind(this))
    //     this.listsNode.addEventListener('click',this.handleDeleteList.bind(this))
    // }

    renderLists() {
        this.adapter.loadLists().then(json => {
            json.forEach(list => console.log(list))
        })
    }
    //     .then( listsJSON => listsJSON.forEach( list => this.list.push( new List(list) )))
    //       .then( this.render.bind(this) )
    //       .catch( (error) => console.log(error) )

    //   handleAddList() {
    //     event.preventDefault()
    //     const body = this.listInput.value
    //     this.adapter.createList(content)
    //     .then( (listJSON) => this.lists.push(new List(listSON)) )
    //     .then(  this.render.bind(this) )
    //     .then( () => this.listInput.value = '' )
    //   }

    //   handleDeleteList() {
    //     if (event.target.dataset.action === 'delete-list' && event.target.parentElement.classList.contains("list-element")) {
    //       const listId = event.target.parentElement.dataset.listid
    //       this.adapter.deleteList(listId)
    //       .then( resp => this.removeDeletedList(resp) )
    //     }
    //   }

    //   removeDeletedList(deleteResponse) {
    //     this.lists = this.lists.filter( list => list.id !== deleteResponse.listId )
    //     this.render()
    //   }

    //   notesHTML() {
    //     return this.lists.map( list => list.render() ).join('')
    //   }

    //   render() {
    //     this.listsNode.innerHTML = `<ul>${this.listsHTML()}</ul>`
    //   }
}

