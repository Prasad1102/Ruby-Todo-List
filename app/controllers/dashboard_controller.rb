class DashboardController < ApplicationController
	def index
		render component: 'Dashboard', prerender: false
	end
end
