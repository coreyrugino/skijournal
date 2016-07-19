class Picture < ActiveRecord::Base
  belongs_to :entry
  mount_uploader :image, ImageUploader
end
