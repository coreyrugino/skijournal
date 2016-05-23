json.entries @entries do |entry|
  # json.id entry.id
  # json.date entry.date
  # json.title entry.title
  # json.story entry.story
  # json.partners entry.partners
  json.(entry, :id, :date, :title, :story, :partners, :image)
  json.url entry_url(entry)
end
