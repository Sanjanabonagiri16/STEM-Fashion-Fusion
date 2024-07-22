import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Path to the JSON file
JSON_FILE_PATH = 'designs.json'

# Load designs from JSON file
def load_designs():
    with open(JSON_FILE_PATH, 'r') as file:
        return json.load(file)

# Save designs to JSON file
def save_designs(designs):
    with open(JSON_FILE_PATH, 'w') as file:
        json.dump(designs, file, indent=4)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/save_design', methods=['POST'])
def save_design():
    data = request.json
    designs = load_designs()
    new_design = {
        "id": len(designs) + 1,
        "fabric": data['fabric'],
        "pattern": data['pattern'],
        "led": data.get('led', False)
    }
    designs.append(new_design)
    save_designs(designs)
    return jsonify({"message": "Design saved successfully!"}), 200

@app.route('/get_designs', methods=['GET'])
def get_designs():
    designs = load_designs()
    return jsonify(designs), 200

if __name__ == '__main__':
    app.run(debug=True)
