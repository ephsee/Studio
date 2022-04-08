class UsersController < ApplicationController

    # skip_before_action :authorized_user, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        # user = User.find(params[:id])
        # render json: user, status: :ok

        if active_user
            render json: active_user, status: :ok
        else
            render json: {error: "No Active Users"}, status: :unauthorized
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end 

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy!
        render json: {}, status: :gone
    end

    private

    def user_params
        params.permit(:full_name, :username, :password, :bio, :email, :discipline_id, :pic, :link1, :link2, :link3)
    end

end
