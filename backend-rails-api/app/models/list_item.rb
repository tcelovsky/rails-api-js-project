class ListItem < ApplicationRecord
  belongs_to :list

  validates :content, length: { minimum: 1, too_short: "Please enter list item" }
end
