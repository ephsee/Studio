class SessionsController < ApplicationController

    # skip_before_action :authorized_user, only: [:login, :logout]

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:active_user] = user.id
            render json: user, status: :ok
        else
            render json: {errors: "Invalid Username or Password"}, status: :unprocessable_entity
        end
    end

    def logout
        session.delete :active_user
        render json: {}, status: :gone
    end

end