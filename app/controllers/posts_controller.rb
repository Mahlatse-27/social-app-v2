class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
  end

  def show
    # @post = Post.find(1)
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end
end
