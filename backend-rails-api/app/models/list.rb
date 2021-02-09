class List < ApplicationRecord
    has_many :list_items, :dependent => :destroy

    validates :title, presence: true
end
