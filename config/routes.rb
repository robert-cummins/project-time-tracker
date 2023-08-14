Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  get '/current_user', to: 'current_user#index'
    
  namespace :api do
    get '/user/:user_id/projects', to: 'projects#index'
  end

  root 'react#index'
  get "*path", to: "react#index"
end
