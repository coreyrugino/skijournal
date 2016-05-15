class InstagramController < ApplicationController
  def index
    @instagram = Instagram.user_recent_media({:count => 2})
    # @instagram = Instagram.media_search("37.7808851", "-122.3948632")
  end
end
