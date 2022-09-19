import json
import requests
import base64
URL = "http://127.0.0.1:8000/pose_app/pose_json"

person_img_path = "aboood.jpeg"
cloth_img_path = "cloth_sample.jpg"

with open(person_img_path, "rb") as f:
    person_img_bytes = f.read()

with open(cloth_img_path, "rb") as f:
    cloth_img_bytes = f.read()

person_img_b64 = base64.b64encode(person_img_bytes).decode("utf8")
cloth_img_b64 = base64.b64encode(cloth_img_bytes).decode("utf8")
headers = {"Cotent-type": "application/json", "Accept": "text/plain"}
payload = json.dumps(
    {"person_img": person_img_b64, "cloth_img": cloth_img_b64})

response = requests.post(URL, data=payload, headers=headers)

try:
    data = response.json()
    result_img_b64 = data["result_img"].encode("utf8")
    result_img_data = base64.b64decode(result_img_b64)
    result_img_path = "./result_img.png"
    with open(result_img_path, "wb") as f:
        f.write(result_img_data)
except requests.exceptions.RequestException:
    print("Error Occurred:", response.text)
