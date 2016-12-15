class ContactUsController < ApplicationController
	def new
		@contact = Contact_us.new
	end

	def create
		@contact = Contact_us.new(params[:contact_us_params])
		@contact.request = request
		if @contact.deliver
			flash.now[:error] = nil
		else
			flash.now[:error] = 'Sorry, we cannot send that message.'
			render :new
		end
	end

	private
		def contact_us_params
			params.require(:contact_us).permit(:name, :email, )
		end
	end

end
