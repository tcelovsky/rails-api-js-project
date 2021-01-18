class ListItem < ApplicationRecord
  belongs_to :list

  validates :content, length: { minimum: 2 }
end
