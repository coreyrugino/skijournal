require 'rails_helper'
# RSpec.describe PicturesController, type: :controller do

  # include Devise::Test::ControllerHelpers
  # describe "GET #new" do
  RSpec.describe PicturesController, type: :controller do
    it "assigns a new picture to @picture" do
      # sign_in
      sign_in_as_a_valid_user
      binding.pry
      picture = Picture.create
      get :new
      expect(response).to render_template(:new)
      # expect(response).to have_http_status(:success)
      # expect(assign(:picture).first).to be_a_new(Picture)
    end
  end

# end
