# config/initializers/carrier_wave.rb

require 'carrierwave/orm/activerecord'

if Rails.env.development?
  CarrierWave.configure do |config|
    config.storage = :file
  end
end

if Rails.env.production?
  CarrierWave.configure do |config|
    config.storage = :fog
  end
end
