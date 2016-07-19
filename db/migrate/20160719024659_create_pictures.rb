class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :caption
      t.string :image
      t.integer :entry_id

      t.timestamps null: false
    end
  end
end
