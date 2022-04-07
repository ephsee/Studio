class User < ApplicationRecord

  has_many :posts
  has_many :comments, through: :posts
  belongs_to :discipline

end
