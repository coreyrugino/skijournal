class EntriesController < ApplicationController
  before_action :authenticate_user!, :except => [:show, :index]
  def index
    @entries = Entry.all.order(:date).reverse_order
  end

  def show
    @entry = Entry.find(params[:id])
    @pictures = Picture.where(entry_id: @entry.id)
  end

  def create
    @entry = Entry.create(entry_params)
  end

  def destroy
    @entry = Entry.find(params[:id]).destroy
    redirect_to dashboard_index_path
  end

  def edit
    @entry = Entry.find(params[:id])
  end

  def update
    @entry = Entry.find(params[:id])
    if @entry.update(entry_params)
      redirect_to entry_path
    else
      render :edit
    end
  end

  private

    def entry_params
      params.require(:entry).permit(:date, :title, :story, :partners, {pictures:[]})
    end

end
