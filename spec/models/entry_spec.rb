require 'rails_helper'

RSpec.describe Entry, type: :model do
  describe 'attributes' do
    it { should respond_to(:id) }
    it { should respond_to(:title) }
    it { should respond_to(:story) }
    it { should respond_to(:date) }
    it { should respond_to(:partners) }
    it { should respond_to(:pictures) }
  end
end
