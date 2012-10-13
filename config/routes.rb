AngularDevise::Application.routes.draw do
  devise_for :users
  root :to => "home#index"
  match "*page" => "home#index"
end