insta = "#{Rails.root}/config/insta.yml"
if File.exists? insta
  config = File.read(insta).split("\n")
  # binding.pry
  config.each {|key, value| ENV[key] || ENV[key] = value.to_s}
end
