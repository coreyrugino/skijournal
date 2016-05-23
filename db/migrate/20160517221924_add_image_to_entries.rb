class AddImageToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :images, :string, array: true, default: []
  end
end
