class ChangeProyectOnContacts < ActiveRecord::Migration
  def up
    rename_column :contacts, :proyect, :project
    change_column :contacts, :project, :text
  end

  def down
  end
end
