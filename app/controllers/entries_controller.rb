class EntriesController < ApplicationController

  def index
    @entries = Entry.all
  end

  def create
    @entry = Entry.create(entry_params)
  end

  def destroy
    binding.pry
    @entry = Entry.find(params[:id])
    @entry.destroy
    head :ok
    # render json: Entry.all
  end

  private

    def entry_params
      params.require(:entry).permit(:date, :title, :story, :partners)
    end

end
