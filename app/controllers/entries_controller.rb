class EntriesController < ApplicationController

  def index
    @entries = Entry.all.order(:date).reverse_order
  end

  def show
    @entry = Entry.find(params[:id])
  end

  def create
    @entry = Entry.create(entry_params)
  end

  def destroy
    @entry = Entry.find(params[:id]).destroy
    head :ok
  end

  private

    def entry_params
      params.require(:entry).permit(:date, :title, :story, :partners)
    end

end
