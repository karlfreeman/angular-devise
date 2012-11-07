#
Warden::Manager.before_logout do |user,auth,opts|
  auth.cookies.delete '_angular_devise_user'
end