class ContactUs < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   :validate => true
  attribute :nickname,  :captcha  => true

  def headers
    {
      :subject => "VV Contact Form Submitted",
      :to => "team@virgoventures.org",
      :from => %("#{name}" <#{email}>)
    }
  end
end