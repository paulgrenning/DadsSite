class PagesController < ApplicationController

  def home
	  @title = "Home"
    @page_header = { :name => "James Grenning", :headerId => "header-name", :link => root_path}
  end

  def mybook
    @title = "Test Driven Development For Embedded C"
    @page_header = {:name => "Test-Driven Development For Embedded C", :headerId => "bookPage", :link => root_path}
  end

end
