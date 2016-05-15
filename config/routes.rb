Rails.application.routes.draw do
  get 'instagram/index'

get 'static_pages/home'
get 'dashboard/index'
root 'static_pages#home'
# root 'dashboard#index'
resources :entries

end
