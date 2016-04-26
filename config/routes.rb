Rails.application.routes.draw do
  resources :testimonials, only: [:index], path: 'kudos'
  resources :contacts, only: [:index, :create], path: 'contact'
  resources :posts, only: [:splash]
  resources :about, only: [:index]
  resources :home, only: [:index]
  resources :work_with_me, only: [:index], path: 'hire_me'

  root 'home#index'

  # Until we can style blog posts better
  get 'posts' => 'posts#splash'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  namespace :users do
    resources :posts
  end

end
