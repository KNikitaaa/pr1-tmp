import json

json_str = '{"name": "John", "age": 25}'
data = json.loads(json_str)
print(data["name"])

data = {"name": "John", "age": 25}
json_str = json.dumps(data)
print(json_str)