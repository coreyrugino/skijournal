require 'rails_helper'

RSpec.describe Picture, type: :model do
  describe 'attributes' do
    it { should respond_to(:id) }
    it { should respond_to(:caption) }
    it { should respond_to(:image) }
    it { should respond_to(:entry_id) }
  end
end
