class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :profile_pic
      t.boolean :admin
      t.string :email

      t.timestamps
    end
  end
end
