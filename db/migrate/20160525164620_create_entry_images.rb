class CreateEntryImages < ActiveRecord::Migration
  def change
    create_table :entry_images do |t|
      t.integer :entry_id
      t.string :image

      t.timestamps null: false
    end
  end
end
