class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = Comment.find(params[:id])
        comment.update!(comment_params)
        render json: Comment, status: :accepted
    end 

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy!
        render json: {}, status: :gone
    end

    private

    def comment_params
        params.permit(:post_id, :comment)
    end

end
