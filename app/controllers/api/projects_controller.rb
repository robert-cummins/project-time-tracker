class Api::ProjectsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    projects = user.projects.includes(:time_entries)
    render json: projects, include: [:time_entries]
  end
end
