Rails.application.routes.draw do
  
  resources :comments
  resources :disciplines
  # :except => [:new, :create, :edit, :update, :show, :destroy]
  # resources :users, :except => [:show]
  resources :users
  resources :posts

  post "/login", to: "sessions#login"

  get "/authorized_user", to: "users#show"

  delete "/logout", to: "sessions#logout"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
