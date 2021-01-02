class ListsController < ApplicationController

    def index
        lists = List.all
        render json: lists, include: [:list_items]
    end

    def show
        list = List.find(params[:id])
        render json: list, include: [:list_items]
    end

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

end
