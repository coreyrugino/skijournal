Rails.application.routes.draw do
get 'static_pages/home'
get 'dashboard/index'
root 'static_pages#home'
# root 'dashboard#index'
resources :entries

end
