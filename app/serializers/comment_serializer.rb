class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :post
end
