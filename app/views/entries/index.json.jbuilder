json.entries @entries do |entry|
  # json.id entry.id
  # json.date entry.date
  # json.title entry.title
  # json.story entry.story
  # json.partners entry.partners

  json.(entry, :id, :date, :title, :story, :partners)
  json.pictures @pictures do |picture|
    json.image picture.entry_id
    json.image picture.image
    json.caption picture.caption
    # json.url url_for(picture)
  end
  # json.(picture, :id, :entry_id, :caption, :image)
  json.url entry_url(entry)
end
