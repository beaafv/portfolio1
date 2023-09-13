Rails.application.routes.draw do
  root to: "pages#home"
  get '/pages/new', to: 'pages#new', as: 'form'   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
