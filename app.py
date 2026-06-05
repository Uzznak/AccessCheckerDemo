from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Autorise les requêtes depuis ton frontend

# Données simulées
USERS = {
    "alice": {"VPN": True, "GitLab": True, "SSH": False, "Kubernetes": True},
    "bob": {"VPN": False, "GitLab": True, "SSH": True, "Kubernetes": False},
}

@app.route('/check_access', methods=['GET'])
def check_access():
    username = request.args.get('username', '').lower()
    if username in USERS:
        return jsonify(USERS[username])
    return jsonify({"error": "Utilisateur non trouvé"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)