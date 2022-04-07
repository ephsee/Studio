class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :content, :upload

  def upload
    if object.upload.attached?
      {
        url: rails_blob_url(object.upload)
      }
    end
  end
  
end
