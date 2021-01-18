class List < ApplicationRecord
    has_many :list_items

    validates :title, length: { minimum: 2 }
end
