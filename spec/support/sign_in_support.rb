# module ControllerHelpers
#     def sign_in(user = double('user'))
#       if user.nil?
#         allow(request.env['warden']).to receive(:authenticate!).and_throw(:warden, {:scope => :user})
#         allow(controller).to receive(:current_user).and_return(nil)
#       else
#         allow(request.env['warden']).to receive(:authenticate!).and_return(user)
#         allow(controller).to receive(:current_user).and_return(user)
#       end
#     end
#   end

  #module for helping controller specs
  module ValidUserHelper
    def signed_in_as_a_valid_user
      @user ||= FactoryGirl.create :user
      sign_in @user # method from devise:TestHelpers
    end
  end

  # module for helping request specs
  module ValidUserRequestHelper

    # for use in request specs
    def sign_in_as_a_valid_user
      @user ||= FactoryGirl.create :user
      post_via_redirect user_session_path, 'user[email]' => @user.email, 'user[password]' => @user.password
    end
  end

  RSpec.configure do |config|
    config.include ValidUserHelper, :type => :controller
    config.include ValidUserRequestHelper, :type => :request
  end
