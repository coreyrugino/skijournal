class AddPicturesToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :pictures, :json
  end
end
