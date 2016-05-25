class AddImagesToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :images, :json
  end
end
