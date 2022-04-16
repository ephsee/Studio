class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :content, :user_id, :blog, :upload, :discipline
  belongs_to :user
  has_many :comments

  # def upload
  #   if object.upload.attached?
  #     {
  #       url: rails_blob_url(object.upload)
  #     }
  #   end
  # end

  def upload
    rails_blob_path(object.upload, only_path: true) if object.upload.attached?
  end

  def discipline
    object.user.discipline.category
  end
  
end
