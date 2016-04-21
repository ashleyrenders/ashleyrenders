class AboutController < ApplicationController

  def index
    @contact = Contact.new
    render :'about/index'
  end

end
