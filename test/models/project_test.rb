# == Schema Information
#
# Table name: projects
#
#  id             :bigint           not null, primary key
#  name           :string
#  time_allocated :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require "test_helper"

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
