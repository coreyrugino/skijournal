Rails.application.routes.draw do
  devise_for :users
  resources :entries
  resources :pictures
  get 'static_pages/home'
  get 'dashboard/index'
  get 'user', to:'entries#user'
  root 'static_pages#home'
  # root 'dashboard#index'
end
