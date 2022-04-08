class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :content, :user_id, :upload
  belongs_to :user
  has_many :comments

  def upload
    if object.upload.attached?
      {
        url: rails_blob_url(object.upload)
      }
    end
  end
  
end
