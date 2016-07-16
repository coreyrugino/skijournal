namespace :populate do
  desc "Populate Entries in dealerships"
  task entries: :environment do
    Entry.populate(60) do |entry|
      entry.title = Faker::Book.title
      entry.story = Faker::Hipster.paragraph(rand(2..10))
      entry.date = Faker::Date.backward(900)
      entry.partners = Faker::Name.name
    end
    puts "60 Entries have been created. Entry count is now #{Entry.count}."
  end
end
