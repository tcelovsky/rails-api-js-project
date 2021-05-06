# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

list_a = List.create(title: "To Do")
list_b = List.create(title: "Grocery Shopping")

list_item_a = ListItem.create(list: list_a, content: "Pick up dry cleaning")
list_item_b = ListItem.create(list: list_a, content: "Clean")
list_item_c = ListItem.create(list: list_a, content: "Finish work project")

list_item_d = ListItem.create(list: list_b, content: "Milk")
list_item_e = ListItem.create(list: list_b, content: "Eggs")
list_item_f = ListItem.create(list: list_b, content: "Beans")