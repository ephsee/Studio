# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

d1 = Discipline.create(category: "Art", description: "the visual arts")
d2 = Discipline.create(category: "Video", description: "the moving image")
d3 = Discipline.create(category: "Music", description: "sonic soundscaping")
d4 = Discipline.create(category: "Writing", description: "literal literacy")

# u1 = User.create(full_name: "Francois Spies", username: "ephsee", password: "yomomma", bio: "big man small world", discipline_id: d1.id, email: "ephsee@hotmail.com", pic: "my face here", link1: "linkedin", link2: "instgram", link3: "twitter")

# p1 = Post.create(content: "details about image", blog:"some blogg info", user_id: u1.id)

# c1 = Comment.create(comment: "this is dope", post_id: p1.id)


# user = User.create(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     email: Faker::Internet.safe_email,
#     password: '123456789'
#     )

#     article = Article.new(
#     title: Faker::Lorem.sentence(word_count: 5),
#     content: Faker::Lorem.paragraphs(number: 4),
#     )

#     article.user = user

#     article.image.attach(
#     io: File.open('app/assets/images/news.jpg'),
#     filename: 'nw.jpg'
#     )

#     article.save!