# == Schema Information
#
# Table name: time_entries
#
#  id         :bigint           not null, primary key
#  start_time :datetime
#  stop_time  :datetime
#  project_id :bigint           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TimeEntry < ApplicationRecord
  belongs_to :project
  belongs_to :user
end
