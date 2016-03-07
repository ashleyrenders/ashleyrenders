# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview
  def new_contact_email_preview
    ContactMailer.new_contact_email(Contact.last)
  end
end
