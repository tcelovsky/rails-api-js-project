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

end
