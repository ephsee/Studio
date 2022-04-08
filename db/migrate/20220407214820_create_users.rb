class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      
      t.string :full_name
      t.string :username
      t.string :password_digest
      t.string :bio
      t.string :email
      t.belongs_to :discipline, null: false, foreign_key: true
      t.string :pic
      t.string :link1
      t.string :link2
      t.string :link3

      t.timestamps
    end
  end
end
