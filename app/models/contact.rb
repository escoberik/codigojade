class Contact < ActiveRecord::Base
  attr_protected nil
  
  validates :name, presence: true
  validates :mail, presence: true
  validates :proyect, presence: true
end
