class List < ApplicationRecord
    has_many :list_items

    validates :title, length: { minimum: 1, too_short: "Please enter list name" }
end
