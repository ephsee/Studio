class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
        # Gadget.all.order(id: :ASC)
    end

    def create
        post = Post.create(post_params)
    end

    private
    def post_params
        params.permit(:user_id, :content, :upload)
    end

end
