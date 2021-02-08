class List < ApplicationRecord
    has_many :list_items, :dependent => :destroy

    validates :title, length: { minimum: 1, too_short: "Please enter list name" }
end
