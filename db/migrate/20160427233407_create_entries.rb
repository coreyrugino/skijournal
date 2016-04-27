class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.datetime :date
      t.string :title
      t.text :story
      t.string :partners

      t.timestamps null: false
    end
  end
end
