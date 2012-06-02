class ContactsController < ApplicationController

def index
  @contact = Contact.new
end

def create
  @contact = Contact.new(params[:contact])
  if @contact.save
    redirect_to contacts_path
  else
    render :new
  end
end

end
