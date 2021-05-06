class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :content, :list_id
  has_one :list
end
