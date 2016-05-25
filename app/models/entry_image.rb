class EntryImage < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  belongs_to :entry
end
