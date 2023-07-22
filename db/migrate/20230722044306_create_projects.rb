class CreateProjects < ActiveRecord::Migration[7.0]
  def up
    create_table :projects do |t|
      t.string :name
      t.integer :time_allocated
      t.timestamps
    end
  end

  def down
    drop_table :projects
  end
end
