Rails.application.routes.draw do
  resources :entries
  resources :pictures
  get 'static_pages/home'
  get 'dashboard/index'
  root 'static_pages#home'
  # root 'dashboard#index'
end
