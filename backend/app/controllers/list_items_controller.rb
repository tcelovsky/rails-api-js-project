class ListItemsController < ApplicationController
    before_action :set_list_item, only: [:show, :edit, :update, :destroy]

    def index 
        list_items = ListItem.all
        render json: list_items
    end

    def show
        render json: @list_item
    end

    def create
        list = List.find(params[:list_id])
        list_item = list.list_items.build(list_item_params)
        render json: list_item.save ? list_item : {message: list_item.errors.messages[0]}
    end

    def edit
    end

    def update
        @list_item.update(list_item_params)
        render json: list_item
    end

    def destroy
        @list_item.delete
    end

    private
    def list_item_params
        params.require(:list_item).permit(:content, :list_id)
    end

    def set_list_item
        @list_item = ListItem.find(params[:id])
    end
end
