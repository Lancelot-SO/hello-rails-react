module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @messages = Message.all.sample
        render json: @messages, status: :ok
      end
    end
  end
end
