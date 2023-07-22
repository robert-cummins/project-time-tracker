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
class Project < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :time_entries
end
