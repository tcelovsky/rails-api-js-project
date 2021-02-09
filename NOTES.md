# Rails API with Javascript Project

The purpose of this file is to keep continuous notes while working on the project. The intent is to document decisions made and steps taken while coding this project. This file is intended to be a rough draft and will be added to .gitignore. These notes will be utilized to create a README.md file for this project.

## Description of the Project

This project will be built using Rails API for the backend and JavaScript, HTML and CSS for the frontend. Styles will be provided by CSS. This project will be a single page web app that allows a user to create multiple lists and add items to those lists. For example, a user may create To Do list, Grocery Shopping list, Travel Destinations list, etc. A user will be able to add and delete the items on each list. The user will also be able to create and delete the lists.

## Creating GitHub Repository

1. Create a new repository in GitHub with .gitignore, README.md and LICENSE files.
2. Clone the newly created repository to your computer using `git clone` command followed by the SSH link to the GitHub repository.

## Adding .drawio Diagram

1. Create a new .drawio file using `touch .drawio` command.
2. In the .drawio file create a diagram representing relationships between the backend models using Entity Relation shapes:
   1. Include title of each model.
   2. Include characteristings of each model.
   3. Include relationships between models.

## Backend Setup

1. Create Rails API structure by using `rails new` command followed by name of the Rails API:
   1. Add `--api` flag after the name to ensure that Rails only includes the necessary folders and capabilities for the API.
   2. Add `--database=postgresql` flag to create the Rails API with Postgres database, instead of the default SQLite3.

_For this project, I entered the following in my terminal: `rails new backend-rails-api --api --database=postgresql`._

**Note**
`rails new` command will generate a new Rails repository that will include .git folder. In order to ensure that both the frontend and backend can be stored in the same repository on GitHub (in two separate folders), you'll have to delete this .git file as it will prevent you from pushing your new backend repository to GitHub:

1. cd into the new Rails repository just created.
2. In your terminal enter `rm -r .git`
3. cd back to the top folder of your project
4. Ensure that the items listes in the .gitignore file at the root of your project are prefaced with the name of your backend repository. For me this meant adding 'backend-rails-api' at the front of each item listed in the .gitignore file.

Continuing with the backend setup:

2. cd into the new folder just created.
3. Navigate to the gemfile and uncomment gem 'rack-cors'. This will allow [Cross Origin Resource Sharing (CORS)] (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) in the API. CORS is a security feature that prevents API calls from unknown origins.
4. Add gem 'active_model_serializers' to the gemfile. Serialization is the process of converting data into a format that can be transmitted across a computer network and reconstructed later. Backend and frontend of this project will make requests to each other across the interwebs.
5. Run bundle install.
6. Inside config/initializers/cors.rb file uncomment the following code:

```
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

Inside the allow block, origins '\*' means that requests from all origins are allowed. This can be changed to only allow requests from the address of the frontend repo - localhost:3000 for example.

## Coding the Backend

1. Use Rails resource generator to create resources:

```
rails g resource list title
rails g resource list_item content list:references
```

This will create two migrations, two models, and two empty controllers.

2. Add seed data:
   list_a = List.create(title: "To Do")
   list_b = List.create(title: "Grocery Shopping")

   list_item_a = ListItem.create(list: list_a, content: "Pick up dry cleaning")
   list_item_b = ListItem.create(list: list_a, content: "Clean")
   list_item_c = ListItem.create(list: list_a, content: "Finish work project")

   list_item_d = ListItem.create(list: list_b, content: "Milk")
   list_item_e = ListItem.create(list: list_b, content: "Eggs")
   list_item_f = ListItem.create(list: list_b, content: "Beans")

3. Run `rails db:create` to create the database.
4. Run `rails db:migrate` to migrate the database.
5. Run `rails db:seed` to seed the database.

**Note**
You may wish to create a custom Rake task to expedite the process of dropping, creating, migrating and seeding the database by using a single command. To do so, navigate to the lib directory and create a new file with .rake extension (I named my file dcms.rake). Inside thew newsly created file add the following code:

```
namespace :db do
  task :dcms do
    desc 'Drop, Create, Migrate and Seed the Database'
    Rake::Task["db:drop"].invoke
    Rake::Task["db:create"].invoke
    Rake::Task["db:migrate"].invoke
    Rake::Task["db:seed"].invoke
    puts 'Database dropped, created, migrated and seeded.'
  end
end
```

The above code will invoke each of the Rake tasks in sequence (drop, create, migrate, seed) when running command `rake db:dcms` and will put out "Database dropped, created, migrated and seeded." message when the task has been completed.

Continue coding the backend:

6. Enter `rails c` in the terminal to drop into the Rails console and confirm that the seed data was populated correctly and model relationships are correct.
7. Navigate to app/controllers/lists_controller.rb and add controller actions:

```
    def index
        lists = List.all
        render json: lists, include: [:list_items]
    end

    def show
        list = List.find(params[:id])
        render json: list, include: [:list_items]
    end
```

8. Navigate to app/serializers/list_serializer.rb and add `had_many :list_items` attribute.
9. Start Rails server by entering `rails s` in your terminal and navigate to localhost:3000/lists in your browser. Confirm that JSON is rendered correctly on the page.
10. With the Rails server running, navigate to localhost:3000/lists/1 in your browser. Confirm that JSON is rendered correctly on the page.
11. Navigate to app/controllers/lists_controller.rb and add create, update and destroy controller actions:

```
    def create
        list = List.create(list_params)
        render json: list.save ? list : {message: list.errors.messages[0]}
    end

    def update
        list = List.find(params[:id])
        list = list.update(list_params)
        render json: list
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
    end

    private
    def list_params
        params.require(:list).permit(:title)
    end
```

12. Navigate to app/controllers/list_items_controller.rb and add controller actions:

```
    def index
        list_items = ListItem.all
        render json: list_items
    end

    def show
        list_item = ListItem.find(params[:id])
        render json: list_item
    end
```

13. With the Rails server running, navigate to localhost:3000/list_items in your browser. Confirm that JSON is rendered correctly on the page.
14. With the Rails server running, navigate to localhost:3000/list_items/1 in your browser. Confirm that JSON is rendered correctly on the page.
15. Navigate to app/controllers/list_items_controller.rb and add create, update and destroy controller actions:

```
    def create
        list = List.find(params[:list_id])
        list_item = list.list_items.build(list_item_params)
        render json: list_item.save ? list_item : {message: list_item.errors.messages[0]}
    end

    def update
        list_item = ListItem.find(params[:id])
        list_item = ListItem.update(list_item_params)
        render json: list_item
    end

    def destroy
        list_item = ListItem.find(params[:id])
        list_item.delete
    end

    private
    def list_item_params
        params.require(:list_item).permit(:content, :list_id)
    end
```

## Frontend Setup

1. cd to the root folder of your project.
2. Create frontend directory by using `mkdir` command followed by the desired name for the frontend directory.

_For this project, I entered the following in my terminal: `mkdir frontend-js`._

3. cd into the newly created directory.
4. Create HTML file by entering `touch index.html` in the terminal.
5. Create source and styles folders by entering `mkdir src styles` in the terminal.
6. Navigate to index.html and add the basic HTML architecture:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rails API with JS Project</title>
    <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>

</body>
</html>
```

7. Update the title line in index.html to the desired title.
8. Open index.html in the browser and confirm the window loads.
9. Create new JavaScript file by entering `touch src/index.js` in the terminal.
10. In the index.html file link the JavaScript file to the HTML page by adding the following before the closing </body> tag:

```
<script type="application/javascript" src="src/index.js"></script>
```

11. Confirm that JavaScrip file was correctly linked to the HTML page by adding `console.log("JS linked to HTML")` to index.js file; then refresh the HTML page in the browser and confirm that the output is displayed in the JavaScript console.

## Coding the Frontend

1. Add the following within the <body> tax of index.html to create basic setup for the webpage:

```
  <header>
    <h2>My Lists</h2>
  </header>
  <main>
    <div class="container">
        <div class="new-list-container">
          <form id="new-list-form">
            <input type="text" name="list-title" id="new-list-title">
            <input type="submit" value="Add List">
          </form>
        </div>
        <div class="lists-container">

        </div>
    </div>
  </main>
```

3. Test that frontend and backend are linked correctly by adding a simple fetch request to index.js; then refresh HTML page in the browser and confirm that JSON data is rendered in the JavaScript console:

```
const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`

fetch(`${LISTS_URL}`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));
```

4. cd into src folder and create adapters and components directories by entering `mkdir adapters components` in the terminal.
5. Add the following to index.js file: `const app = new App()`. The index.js file has only one responsibility - creating the new App object.
6. In the src/adapters folder create listsAdapter.js file. This adapter will be responsible for communicating with the rails API backend.
7. Add the following consts to listsAdapter.js file:

```
const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`
const LIST_ITEMS_URL = `${BASE_URL}/list_items`
```

8. Create listsAdapter class and add the following code to listsAdapter.js file:

```
class ListsAdapter {
    constructor() {
        this.listsUrl = LISTS_URL
        this.listItemsUrl = LIST_ITEMS_URL
    }

    getLists() {
        return fetch(this.listsUrl).then(res => res.json())
    }
}
```

9. cd into src/components folder and create the following files: app.js, list.js and lists.js by running `mkdir app.js list.js lists.js` command in the terminal.
10. Create the App class in app.js:

```
class App {
    constructor() {
      this.lists = new Lists()
    }
}
```

The idea is that index.js will get loaded and will call `new App()`, which will run the App constructor function. The App constructor will set a property on the newly created app called lists that points to a new instance of the Lists object.

11. Create new Lists class in lists.js:

```
class Lists {
    constructor() {
        this.addEventListenersAndBindings()
        this.adapter = new ListsAdapter()
    }

    addEventListenersAndBindings() {
        document.addEventListener("DOMContentLoaded", () => this.loadLists())
        this.newListInput = document.getElementById("new-list-title")
        this.newListForm = document.getElementById("new-list-form")
        this.newListForm.addEventListener('submit', this.addList.bind(this))
    }

    loadLists() {
        this.adapter.getLists()
        .then(lists => {
            lists.forEach(list => new List (list))
        })
    }
}
```

This Lists Class will communicate with the Lists Adapter and will render the lists on the page.

12. Navigate to list.js and create a new List class:

```
class List {
    constructor(listJSON) {
        this.title = listJSON.title
        this.id = listJSON.id
        this.listItems = listJSON.list_items
        this.adapter = new ListsAdapter()
        this.addBindings()
        this.renderList()
    }

    addBindings() {
        this.listsContainer = document.querySelector(".lists-container")
    }

    renderList() {
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        const form = document.createElement("form")
        const inputText = document.createElement("input")
        const inputButton = document.createElement("input")

        div.setAttribute("class", "list-container")
        div.setAttribute("data-list-id", this.id)
        h3.setAttribute("title-list-id", this.id)
        ul.setAttribute("data-list-id", this.id)
        form.setAttribute("id", "new-list-item")
        form.setAttribute("data-list-id", this.id)
        inputText.setAttribute("type", "text")
        inputText.setAttribute("name", "list-item")
        inputText.setAttribute("id", "new-list-item-input")
        inputText.setAttribute("data-list-id", this.id)
        inputButton.setAttribute("button-list-id", this.id)
        inputButton.setAttribute("type", "submit")
        inputButton.setAttribute("value", "Add Item")

        const deleteButton = document.createElement("input")
        deleteButton.setAttribute("button-list-id", this.id)
        deleteButton.setAttribute("type", "submit")
        deleteButton.setAttribute("value", "Delete List")
        deleteButton.setAttribute("class", "delete-list-button")

        h3.innerText = this.title

        form.appendChild(inputText)
        form.appendChild(inputButton)
        h3.appendChild(deleteButton)
        div.appendChild(h3)
        div.appendChild(ul)
        div.appendChild(form)
        this.listsContainer.appendChild(div)

        this.listItems.forEach(listItem => new ListItem (listItem))
        form.addEventListener('submit', this.addListItem.bind(this))
    }
}
```

The point of the List class is to house all the HTML and DOM manipulation logic related to lists.

13. Create a new file "listItem.js" in the "components" folder and add the following:

```
class ListItem {
    constructor(listItemJSON) {
        this.id = listItemJSON.id
        this.content = listItemJSON.content
        this.listId = listItemJSON.list_id
        this.adapter = new ListsAdapter()
        this.renderListItem()
    }

    renderListItem() {
        const ul = document.querySelector(`ul[data-list-id="${this.listId}"]`)

        const li = document.createElement("li")
        li.setAttribute("data-list_item_id", this.id)
        li.setAttribute("data-list_id", this.listId)
        li.innerText = this.content

        const deleteButton = document.createElement("input")
        deleteButton.setAttribute("button-list-item-id", this.id)
        deleteButton.setAttribute("class", "delete-list-item-button")
        deleteButton.setAttribute("type", "submit")
        deleteButton.setAttribute("value", "Delete List Item")

        li.appendChild(deleteButton)
        ul.appendChild(li)
    }
}
```

The point of the ListItems class is to house all the HTML and DOM manipulation logic related to list items.

14. Next, focus on add list and add list item functionality of the app. Navigate to lists.js and add the following to Lists class:

```
    addList(e) {
        e.preventDefault()
        if (this.newListInput.value) {
           const newListValue = this.newListInput.value
            const newList = {
                title: newListValue
            }
            this.adapter.createList(newList)
            .then(list => new List (list))
            this.newListInput.value = ''
        } else {
            this.errorMessage()
            this.newListInput.value = ''
        }
    }

    errorMessage() {
        alert("Please enter list title.")
    }
```

Navigate to list.js and add the following to List class:

```
    addListItem(e) {
        e.preventDefault()
        const newListItemInput = document.querySelector(`input[data-list-id="${this.id}"]`)
        if (newListItemInput.value) {
            const newListItemValue = newListItemInput.value
            const listId = this.id
            const newListItem = {
                listId: listId,
                content: newListItemValue
            }
            this.adapter.createListItem(newListItem)
            .then(json => new ListItem (json))
            newListItemInput.value = ''
         } else {
            this.errorMessage()
            newListItemInput.value = ''
         }
    }

    errorMessage() {
        alert("Please enter list item.")
    }
```

Navigate to listsAdapter.js and add the following to ListsAdapter class:

```
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
```

15. Next, focus on delete list and delete list item functionality of the app. Navigate to listItem.js and add the following event listener to renderListItem() method:

```
deleteButton.addEventListener('click', this.deleteListItem.bind(this))
```

Add the following to ListItem class within listItem.js:

```
    deleteListItem(e) {
        e.preventDefault()
        const id = this.id
        this.adapter.deleteListItem(id)
        .then(e.target.parentElement.remove())
    }
```

Navigate to list.js and add the following event listener to renderList() method:

```
deleteButton.addEventListener('click', this.deleteList.bind(this))
```

Add the following to List class within list.js:

```
    deleteList(e) {
        e.preventDefault()
        const id = this.id
        this.adapter.deleteList(id)
        .then(e.target.parentElement.parentElement.remove())
    }
```

Navigate to listsAdapter.js and add the following to ListsAdapter class:

```
    deleteListItem(id) {
        const formData = {
            id: id
        }
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        return fetch(`${this.listItemsUrl}/${id}`, configObj)
    }

    deleteList(id) {
        const formData = {
            id: id
        }
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        return fetch(`${this.listsUrl}/${id}`, configObj)
    }
```

Continue checking the functionanlity of your app as you go.

## Adding Styles

1. In the styles folder create file styles.css
2. cd into styles.css
3. Add css styles, example is below for the styles used for my app:

```
body {
  margin: 20px;
  padding: 0;
}

header {
  background-color: #eeeeee;
  margin: 0 auto;
  height: 50px;
  box-shadow: 10px 10px grey;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

div.lists-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 15px;
  place-content: stretch;
  grid-auto-flow: row;
}

div.new-list-container {
  margin-top: 1em;
  margin-bottom: 1em;
}

div.list-container {
  background-color: #eeeeee;
  height: 250px;
  width: 250px;
  box-shadow: 10px 10px grey;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin: 1em 1em 0em 0em;
  justify-self: start;
}

h2 {
  font-size: 1.5em;
  color: black;
  font-family: Helvetica;
  margin: 0.65em 0.75em;
}

h3 {
  font-size: 1em;
  color: black;
  font-family: Helvetica;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 10px;
  text-align: left;
}

li {
  font-family: Helvetica;
  font-size: 0.85em;
  list-style: inside;
}

input[type="submit" i] {
  font-size: 0.65em;
  color: white;
  background-color: grey;
  border-radius: 10px;
  text-align: center;
  margin-left: 1em;
  padding: 0px 6px;
}

input[type="text" i] {
  border-radius: 10px;
}

input.delete-list-item-button {
  float: right;
}

input.delete-list-button {
  font-size: 0.75em;
  color: white;
  background-color: grey;
  border-radius: 10px;
  text-align: center;
  margin-left: 1em;
  float: right;
}

@media only screen and (min-width: 500px) {
  div.lists-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (min-width: 850px) {
  div.lists-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

4. Navigate to index.html and link styles.css to index.html by adding the following within the `<head>` tag:

```
<link rel="stylesheet" href="./styles/styles.css">
```
