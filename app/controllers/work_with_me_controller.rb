class WorkWithMeController < ApplicationController

  def index
    @contact = Contact.new
    render :'work_with_me/index'
  end

end
