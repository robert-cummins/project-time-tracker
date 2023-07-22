class CreateJoinTableUserProject < ActiveRecord::Migration[7.0]
  def up
    create_join_table :users, :projects do |t|
      t.index [:user_id, :project_id]
      t.index [:project_id, :user_id]
    end
  end

  def down
    drop_table :projects_users
  end
end
