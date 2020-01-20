class UsersController < ApplicationController
    def create 
        # binding.pry
        user = User.create(params.require(:user).permit(:name,:email,:password_digest,:admin))
        if user  
            render json:  {user: user}
        else
           render json: {error: "The email '#{params.require(:user).permit(:email)[:email]}' is already in use!"}
        end
    end
    
end
