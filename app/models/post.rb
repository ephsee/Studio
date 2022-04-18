class Post < ApplicationRecord

    belongs_to :user
  
    has_many :comments, dependent: :destroy
  
    has_one_attached :upload
  
    # has_one :upload_url
  
    def upload_url
      Rails.application.routes.url_helpers.url_for(upload) if upload.attached?
    end
  
    # has_one :upload_attachment, dependent: :destroy
    # has_one :upload_blob, through: :upload_attachment
  
    # class Pub < ApplicationRecord
    #   include Rails.application.routes.url_helpers
    
    #   has_many :pub_tables
    #   has_many :opening_hours
    #   has_many :bookings
    #   has_many_attached :images
    #   has_one :user
    
    #   accepts_nested_attributes_for :pub_tables
    #   accepts_nested_attributes_for :opening_hours
    # end
  
  end