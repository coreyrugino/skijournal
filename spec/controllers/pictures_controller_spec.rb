require 'rails_helper'
require 'spec_helper'
require 'support/devise_support.rb'
# RSpec.describe PicturesController, type: :controller do

  # include Devise::Test::ControllerHelpers
  # describe "GET #new" do
  RSpec.describe PicturesController, type: :controller do
    it "assigns a new picture to @picture" do
      binding.pry
      get new_picture_path
      sign_in_as_a_valid_user
      get :new
      picture = Picture.create
      expect(response).to render_template(:new)
      # expect(response).to have_http_status(:success)
      # expect(assign(:picture).first).to be_a_new(Picture)
    end
  end

# end
