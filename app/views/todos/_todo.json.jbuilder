json.extract! todo, :id, :title, :body, :created_at, :updated_at, :completed, :priority
json.url todo_url(todo, format: :json)
