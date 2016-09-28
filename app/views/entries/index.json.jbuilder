json.entries @entries do |entry|
  json.(entry, :id, :title, :story, :partners, :pictures)
  json.date entry.date.strftime("%A, %B %e, %Y")
  json.url entry_url(entry)
end

if current_user == nil
  json.user "guest"
else
  json.user current_user.email
end
