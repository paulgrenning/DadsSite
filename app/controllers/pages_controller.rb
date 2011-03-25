class PagesController < ApplicationController

  def home
	  @title = "Home"
    @page_header = { :name => "James Grenning", :link => root_path}
  end

end
