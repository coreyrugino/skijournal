require 'rails_helper'

RSpec.describe EntriesController, type: :controller do
  let (:entry){FactoryGirl.create(:entry)}

  describe "GET #index" do
    it "shows all entries successfully" do
      entry = FactoryGirl.create(:entry)
      expect(Entry.count).to eq(1)
      binding.pry   #it has a user id of 1, and it works in our app.
    end
  end

  describe "GET #show" do
    it "shows a single entry successfully" do
    end
  end

end
