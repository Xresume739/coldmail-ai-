import requests
import os
import random

from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

MODEL = "nvidia/nemotron-3-super-120b-a12b:free"

def build_prompt(data):
    styles = ["curious", "friendly", "direct", "slightly bold"]
    style = random.choice(styles)

    return f"""
You are an expert cold email copywriter.

Step 1: Understand the recipient
Step 2: Create a natural hook
Step 3: Write a short, human email

Rules:
- Keep under 120 words
- Avoid generic phrases
- Make it sound natural

Avoid:
- "I hope this email finds you well"

Tone:
- {style}
- Slightly casual
- Friendly

User Info:
Name: {data["name"]}
Company: {data["company"]}
Role: {data["role"]}
Goal: {data["goal"]}
"""

def generate_email(data):
    prompt = build_prompt(data)

    url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }

    response = requests.post(url, headers=headers, json=payload)
    result = response.json()

    # Debug: print the raw response if something goes wrong
    if response.status_code != 200:
        print(f"[ERROR] OpenRouter API returned status {response.status_code}")
        print(f"[ERROR] Response: {result}")
        raise Exception(f"OpenRouter API error: {result.get('error', {}).get('message', 'Unknown error')}")

    if "choices" not in result:
        print(f"[ERROR] Unexpected API response (no 'choices' key): {result}")
        raise Exception(f"Unexpected API response: {result}")

    return result["choices"][0]["message"]["content"]