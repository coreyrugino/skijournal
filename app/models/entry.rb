class Entry < ActiveRecord::Base
  has_many :pictures, :dependent => :destroy
  mount_uploaders :pictures, PicturesUploader
end
