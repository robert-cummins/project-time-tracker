class CreateTimeEntries < ActiveRecord::Migration[7.0]
  def up
    create_table :time_entries do |t|
      t.datetime :start_time
      t.datetime :stop_time
      t.references :project, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_table :time_entries
  end
end
