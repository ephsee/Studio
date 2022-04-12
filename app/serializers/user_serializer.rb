class UserSerializer < ActiveModel::Serializer

  attributes :id, :full_name, :username, :password, :bio, :email, :pic, :discipline_id, :link1, :link2, :link3, :created_at
  has_one :discipline
  
end
