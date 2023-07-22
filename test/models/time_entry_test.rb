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
require "test_helper"

class TimeEntryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
