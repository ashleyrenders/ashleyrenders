class ContactMailer < ApplicationMailer

  default from: 'Yeah I Said It'

  def new_contact_email(contact)
    @contact = contact
    mail(to: 'renders.ashley@gmail.com', subject: 'new message')
  end

end
