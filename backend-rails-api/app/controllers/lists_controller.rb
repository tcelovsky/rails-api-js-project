class ListsController < ApplicationController

    def index
        lists = List.all
        render json: lists, include: [:list_items]
    end

    def show
        list = List.find(params[:id])
        render json: list, include: [:list_items]
    end

end
