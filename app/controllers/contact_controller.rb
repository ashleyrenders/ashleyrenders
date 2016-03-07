class ContactController < ApplicationController

  def index
    @contact = Contact.new
    render :'contact/index'
  end

end
