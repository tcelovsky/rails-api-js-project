class ListItemsController < ApplicationController
    def index 
        list_items = ListItem.all
        render json: list_items
    end

    def show
        list_item = ListItem.find(params[:id])
        render json: list_item
    end

    def create
        list = List.find(params[:list_id])
        list_item = list.list_items.build(list_item_params)
        render json: list_item.save ? list_item : {message: list_item.errors.messages[0]}
    end

    def update
        list = ListItem.find(params[:id])
        list_item = ListItem.update(list_item_params)
        render json: list_item
    end

    def delete
        list_item = ListItem.find(params[:id])
        list_item.delete
    end

    private
    def list_item_params
        params.require(:list_item).permit(:content, :list_id)
    end
end
