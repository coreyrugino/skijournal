class StaticPagesController < ApplicationController
  before_action :authenticate_user!, :except => [:home, :resume]
  def home
  end

  def resume
  end
end
