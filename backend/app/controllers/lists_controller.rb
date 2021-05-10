class ListsController < ApplicationController
    before_action :set_list, only: [:show, :update, :destroy]

    def index
        lists = List.all
        render json: lists, include: [:list_items]
    end

    def show
        render json: @list, include: [:list_items]
    end

    def create
        list = List.create(list_params)
        render json: list.save ? list : {message: list.errors.messages[0]}
    end

    def update
        @list = list.update(list_params)
        render json: list
    end

    def destroy
        @list.destroy
    end

    private
    def list_params
        params.require(:list).permit(:title)
    end

    def set_list
        @list = List.find(params[:id])
    end

end
