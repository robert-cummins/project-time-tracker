class AddTimeUsedToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :time_used, :integer
  end
end
