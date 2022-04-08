class ApplicationController < ActionController::API
  include ActionController::Cookies

  # before_action :authorized_user

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :not_valid

  # def active_user
  #   user = User.find_by(id: session[:active_user])
  # end

  # def authorized_user
  #   return render json: { errors: "User Not Authorized" }, status: :unauthorized unless authorized_user
  # end

  private

  def not_found(error)
    render json: {error: error.model + " not found"}, status: :not_found
  end

  def not_valid(invalid)
    render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
