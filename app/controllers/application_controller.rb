# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionControl er::RequestForgeryProtection for detaile

  before_filter :ensure_domain

  APP_DOMAIN = 'myapp.jamesgrenning.com'

  def ensure_domain
    if request.env['HTTP_HOST'] != APP_DOMAIN
      # HTTP 301 is a "permanent" redirect
      redirect_to "http://#{APP_DOMAIN}", :status => 301
    end
  end


  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password
end
