class DashboardController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  def show
    # @entry = Entry.find(params[:id])
  end

end
