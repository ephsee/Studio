class User < ApplicationRecord

  has_secure_password

  has_many :posts
  has_many :comments, through: :posts
  belongs_to :discipline

  # validates :username, presence: true, uniqueness: true
  # validates :password, presence: true, uniqueness: true

end
