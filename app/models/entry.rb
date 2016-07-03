class Entry < ActiveRecord::Base
  # mount_uploader :image, ImageUploader
  mount_uploaders :pictures, PicturesUploader
end
