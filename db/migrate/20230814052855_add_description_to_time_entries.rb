class AddDescriptionToTimeEntries < ActiveRecord::Migration[7.0]
  def change
    add_column :time_entries, :description, :string
  end
end
