class EntryImagesController < ApplicationController
  def index
    e = EntryImage.new
    e.image = entry_image_params[:file] # Assign a file like this, or

    # like this
    File.open('somewhere') do |f|
      e.image = f
    end

    e.save!
    e.image.url # => '/url/to/file.png'
    e.image.current_path # => 'path/to/file.png'
    e.image # => 'file.png'
  end
  private
  def entry_image_params
    params.require(:entryimage).permit( images:, :caption)
  end
end
