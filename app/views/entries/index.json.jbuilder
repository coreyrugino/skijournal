json.entries @entries do |entry|
  json.(entry, :id, :date, :title, :story, :partners, :pictures)
  json.url entry_url(entry)
end

if current_user == nil
  json.user "guest"
else
  json.user current_user.email
end
