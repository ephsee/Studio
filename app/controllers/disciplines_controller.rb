class DisciplinesController < ApplicationController

    def index
        render json: Discipline.all, status: :ok
    end

end
