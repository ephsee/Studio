class UserSerializer < ActiveModel::Serializer

  attributes :id, :full_name, :bio, :email, :pic, :discipline_id, :link1, :link2, :link3
  has_one :discipline
  
end
