class PostsController < ApplicationController

    # skip_before_action :authorized_user, only: [:index, :show, :create, :update, :destroy]

    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def show
        post = Post.find(params[:id])
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post, status: :accepted
    end 

    def destroy
        post = Post.find_by(id: params[:id])
        post.destroy!
        render json: {}, status: :gone
    end

    private

    def post_params
        params.permit(:id, :content, :user_id, :blog, :upload)
    end

end
