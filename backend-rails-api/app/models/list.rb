class List < ApplicationRecord
    has_many :list_items

    validates :title, presence: true
end
