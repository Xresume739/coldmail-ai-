# 🚀 ColdMail AI – UI Development Guide (Gemini Instructions)




---
## phase 1 is already done 

# 🟢 PHASE 1: Project Setup

## Tasks:

* Initialize Next.js app
* Install Tailwind CSS
* Set up folder structure


## Expected Structure:

* /app (or /pages)
* /components
* /styles

---

# 🟢 PHASE 2: Landing Page (Simple + Clean)

## Sections:

1. Hero Section

   * Heading: "Write Cold Emails That Get Replies"
   * Subtext: "AI-powered personalized outreach in seconds"
   * CTA Button: "Start Generating"

2. Features Section (3 blocks)

   * Personalized emails
   * Fast generation
   * Simple interface

3. Footer

   * Minimal links

## Design Rules:

* Centered layout
* Clean spacing
* No clutter

---

# 🟢 PHASE 3: Dashboard UI (Core Feature)

## Layout:

* Centered card or container

## Input Fields:

* Name (text input)
* Company (text input)
* Role (text input)
* Goal (textarea)

## Button:

* "Generate Email"

## Output Section:

* Display generated email
* Copy button

---

# 🟢 PHASE 4: State Management

## Requirements:

* Store form inputs in state
* Store API response in state
* Show loading state when generating

---

# 🟢 PHASE 5: API Integration

## Task:

* Send POST request to backend endpoint:
  http://localhost:8000/generate-email

## Data format:

{
name,
company,
role,
goal
}

## Output:

* Display email response in UI

---

# 🟢 PHASE 6: UX Enhancements

## Add:

* Loading spinner when generating
* Disable button during request
* Error handling (show message if API fails)

---

# 🟢 PHASE 7: UI Polish

## Design Requirements:

* Use Tailwind for styling
* Rounded corners (lg or xl)
* Soft shadows
* Good spacing (padding & margin)

## Keep it:

* Minimal
* Fast
* Clean

---

# ⚠️ IMPORTANT RULES

❌ Do NOT add:

* Tone selection
* Multiple steps
* Complex dashboards

✅ Focus on:

* Speed
* Simplicity
* Output clarity

---

# 🧠 FINAL EXPECTATION

User flow should be:
Input → Click → Get email instantly

No confusion. No friction.
