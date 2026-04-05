import requests
import json

# ============================================
# Test 1: Check if server is running
# ============================================
print("=" * 50)
print("TEST 1: Health Check (GET /)")
print("=" * 50)

try:
    response = requests.get("http://localhost:8000/")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")
    print("[PASS] Server is running!\n")
except requests.exceptions.ConnectionError:
    print("[FAIL] Server is NOT running!")
    print("Start it first with: uvicorn main:app --reload")
    print("Exiting...")
    exit(1)

# ============================================
# Test 2: Generate a cold email
# ============================================
print("=" * 50)
print("TEST 2: Generate Email (POST /generate-email)")
print("=" * 50)

payload = {
    "name": "Rahul",
    "company": "TechCorp",
    "role": "CEO",
    "goal": "Offer AI-powered marketing services to boost their sales"
}

print(f"Sending payload: {json.dumps(payload, indent=2)}\n")

try:
    response = requests.post(
        "http://localhost:8000/generate-email",
        json=payload
    )
    print(f"Status Code: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"\nGenerated Email:\n")
        print(result.get("email", "No email in response"))
        print("\n[PASS] Email generated successfully!")
    else:
        print(f"[FAIL] Error: {response.text}")
        
except Exception as e:
    print(f"[FAIL] Request failed: {e}")