require 'rails_helper'

RSpec.describe EntriesController, type: :controller do
  let (:entry){FactoryGirl.create(:entry)}

  describe "GET #index" do
    # it "shows all entries successfully" do
    #   entry = FactoryGirl.create(:entry)
    #   expect(Entry.count).to eq(1)
    #   binding.pry   #it has a user id of 1, and it works in our app.
    # end
    it "returns http success" do
      # get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

end
