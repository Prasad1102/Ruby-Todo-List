class CreateTodos < ActiveRecord::Migration[7.1]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :body
      t.boolean :completed, default: false
      t.integer :priority, default: 0
      t.timestamps
    end
  end
end
