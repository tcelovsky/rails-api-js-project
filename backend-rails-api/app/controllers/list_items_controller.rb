class ListItemsController < ApplicationController
    def index 
        list_items = ListItem.all
        render json: list_items
    end

    def show
        list_item = ListItem.find(params[:id])
        render json: list_item
    end
end
