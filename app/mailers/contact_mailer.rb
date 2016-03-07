class ContactMailer < ApplicationMailer

  default from: 'localhost:3000'

  def new_contact_email(contact)
    @contact = contact
    mail(to: 'oliver.androi@gmail.com', subject: 'new message')
  end

end
