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

   list_item_a = List_item.create(list: list_b, content: "Pick up dry cleaning")
   list_item_b = List_item.create(list: list_b, content: "Clean")
   list_item_c = List_item.create(list: list_b, content: "Finish work project")

   list_item_d = List_item.create(list: list_b, content: "Milk")
   list_item_e = List_item.create(list: list_b, content: "Eggs")
   list_item_f = List_item.create(list: list_b, content: "Beans")

3. Run `rails db:create` to create the database.
4. Run `rails db:migrate`.
5. Run `rails db:seed` to see the database.
6. Navigate to app/controllers/lists_controller and add controller actions:

```
    def index
        lists = List.all
        render json: lists, include: [:list_item]
    end

    def show
        list = List.find_by(params[:id])
        render json: list, include: [:list_item]
    end
```