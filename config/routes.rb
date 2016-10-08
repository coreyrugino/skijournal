Rails.application.routes.draw do
  devise_for :users
  resources :entries
  resources :pictures
  get 'static_pages/home'
  get 'static_pages/resume'
  get 'dashboard/index'
  get 'entry_search', to:'entries#search'
  root 'static_pages#home'
end
