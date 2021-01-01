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
