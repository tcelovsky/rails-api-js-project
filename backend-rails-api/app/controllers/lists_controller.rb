class ListsController < ApplicationController

    def index
        lists = List.all
        render json: lists, include: [:list_items]
    end

end
