class PicturesController < ApplicationController
  before_action :authenticate_user!
  def new
    @picture = Picture.new
  end

  def edit
  end

  def create
    @picture = Picture.new(picture_params)
    if @picture.save
      redirect_to dashboard_index_path
    else
      render :new
    end
  end

  private
      def picture_params
        params.require(:picture).permit(:entry_id, :caption, :image)
      end

end
