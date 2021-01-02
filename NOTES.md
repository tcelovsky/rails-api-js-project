# Rails API with Javascript Project

The purpose of this file is to keep continuous notes while working on the project. The intent is to document decisions made and steps taken while coding this project. This file is intended to be a rough draft and will be added to .gitignore. These notes will be utilized to create a README.md file for this project.

## Description of the Project

This project will be built using Rails API for the backend and JavaScript, HTML and CSS for the frontend. Styles will be provided by CSS. This project will be a single page web app that allows a user to create multiple lists and add items to those lists. For example, a user may create To Do list, Grocery Shopping list, Travel Destinations list, etc. A user will be able to add, update and delete the items on each list. The user will also be able to create and delete the lists.

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
4. Ensure that the itmes listes in the .gitignore file at the root of your project are prefaced with the name of your backend repository. For me this meant adding 'backend-rails-api' at the front of each item listed in the .gitignore file.

Continuiong with the backend setup:

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
6. Enter `rails c` in the terminal to drop into the Rails console and confirm that the seed data was populated correctly and model relationships are correct.
7. Navigate to app/controllers/lists_controller.rb and add controller actions:

```
    def index
        lists = List.all
        render json: lists, include: [:list_items]
    end

    def show
        list = List.find_by(params[:id])
        render json: list, include: [:list_items]
    end
```

8. Navigate to app/serializers/list_serializer.rb and add `had_many :list_items` attribute.
9. Start Rails server by entering `rails s` in your terminal and navigate to localhost:3000/lists in your browser. Confirm that JSON is rendered correctly on the page.
10. With the Rails server running, navigate to localhost:3000/lists/1 in your browser. Confirm that JSON is rendered correctly on the page.
11. Navigate to app/controllers/lists_controller.rb and add create, update and delete controller actions:

```
def create
        list = List.create(list_params)
        render json: list
    end

    def update
        list = List.find(params[:id])
        list = List.update(list_params)
        render json: list
    end

    def delete
        list = List.find(params[:id])
        list.delete
        render json: {listId: list.id}
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
15. Navigate to app/controllers/list_items_controller.rb and add create, update and delete controller actions:

```
    def create
        list = List.find(params[:list_id])
        list_item = list.list_item.build(list_item_params)
        render json: list_item.save ? list_item : {message: list_item.errors.messages[0]}
    end

    def update
        list = List.find(params[:list_id])
        list_item = list.list_item.update(list_item_params)
        render json: list_item
    end

    def delete
        list_item = ListItem.find(params[:id])
        list_item.delete
    end

    private
    def list_item_params
        params.require(:list_item).permit(:content)
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
    <title>Document</title>
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
<script type="application/javascript" src="src/index.js" charset="UTF-8"></script>
```

11. Confirm that JavaScrip file was correctly linked to the HTML page by adding `console.log("JS linked to HTML")` to index.js file; then refresh the HTML page in the browser and confirm that the output is displayed in the JavaScript console.

## Coding the Frontend

1. Add the following within the <body> tax of index.html:

```
<div class="container">
        <div id="new-list-container">
          <form id="new-list-form">
            <input type="text" name="list-title" id="new-list-title">
            <input type="text" name="list-item" id="new-list-item">
            <input type="submit" value="Add List">
          </form>
        </div>
        <div id="lists-container">

        </div>
    </div>
```

2. Add URL const's to index.js:

```
const BASE_URL = "http://localhost:3000"
const LISTS_URL = `${BASE_URL}/lists`
const LIST_ITEMS_URL = `${BASE_URL}/list_items`
const main = document.querySelector("main")
```

3. Test that frontend and backend are linked correctly by adding a simple fetch request to index.js; then refresh HTML page in the browser and confirm that JSON data is rendered in the JavaScript console:

```
fetch(`${LISTS_URL}`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));
```

4. cd into src folder and create adapters and components directories by entering `mkdir adapters components` in the terminal.
