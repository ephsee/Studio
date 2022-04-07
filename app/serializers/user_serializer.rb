class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :password, :bio, :email, :pic, :link1, :link2, :link3
  has_one :discipline
end
