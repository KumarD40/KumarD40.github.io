# 🚀 Dilip Kumar Portfolio — GitHub Pages Deployment Guide

---

## 📁 File Structure

```
dilip-portfolio/
├── index.html         ← Main page (structure)
├── css/
│   └── style.css      ← All styling
├── js/
│   └── script.js      ← All data + behaviour  ← EDIT THIS MOST
├── resume/
│   └── resume.pdf     ← Add your resume here (optional)
└── README.md          ← This file
```

---

## 🌐 STEP-BY-STEP: Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub Account
- Go to https://github.com and sign up (or log in).

---

### Step 2 — Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Repository name: **`dilipkumar.github.io`**  
   _(Replace `dilipkumar` with your exact GitHub username — this is important!)_
3. Set visibility to **Public**
4. Click **Create repository**

> ⚠️ The repo name MUST be `yourusername.github.io` for the free custom URL to work.

---

### Step 3 — Upload Your Files

**Option A — Using GitHub Website (Easiest)**

1. Open your new repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop these items:
   - `index.html`
   - The `css/` folder
   - The `js/` folder
4. Write a commit message: `"Initial portfolio launch"`
5. Click **Commit changes**

**Option B — Using Git (Recommended)**

```bash
# Install Git if not already installed
# https://git-scm.com/downloads

# Open terminal, navigate to the portfolio folder
cd dilip-portfolio

# Initialize git and push
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main
```

---

### Step 4 — Enable GitHub Pages

1. In your repository, go to **Settings** (top tabs)
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**

---

### Step 5 — Your Site is Live! 🎉

After 1–2 minutes, your portfolio is live at:
```
https://YOURUSERNAME.github.io
```

---

## ✏️ HOW TO EDIT CONTENT LATER

All content (skills, experience, projects, clients) lives in **`js/script.js`** near the top.  
You NEVER need to touch `index.html` for content changes.

---

### Add a New Skill Category

Find the `skills` array and add a new object:

```javascript
{
  category: "Observability",          // ← Category heading
  icon: "ph ph-chart-line",           // ← Phosphor icon class
  items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
}
```

Find icon names at: https://phosphoricons.com

---

### Add a New Job (Experience)

Add to the TOP of the `experience` array (newest first):

```javascript
{
  company: "New Company",
  role: "Job Title",
  period: "2024 – Present",
  achievements: [
    "Managed X infrastructure for Y clients.",
    "Automated Z using Ansible, reducing effort by 50%.",
    "Led incident response achieving RTO under 30 minutes."
  ]
}
```

---

### Add a New Project

Add to the `projects` array:

```javascript
{
  title: "My New Project",
  description: "What you built and what problem it solved.",
  stack: ["Tool1", "Tool2", "Cloud"],
  github: "https://github.com/yourusername/project-repo"
}
```

---

### Update Contact Details

In `index.html`, search for `✏️ EDIT` comments — they mark every placeholder:
- Email address
- GitHub URL
- LinkedIn URL

---

### Add Your Resume

1. Create a `resume/` folder in the repo
2. Add your PDF as `resume/dilipkumar-resume.pdf`
3. In `js/script.js`, find `initResumeBtn()` and update:

```javascript
window.open('resume/dilipkumar-resume.pdf', '_blank');
```

---

## 🔄 Updating Your Site After Changes

**Via GitHub website:**  
Go to the file → click the pencil ✏️ icon → edit → commit

**Via Git:**
```bash
git add .
git commit -m "Updated experience section"
git push
```

Changes go live within 1–2 minutes automatically.

---

## 🙋 Quick Tips

| Want to...                        | Edit this file         |
|-----------------------------------|------------------------|
| Add/remove skills                 | `js/script.js`         |
| Add a new job                     | `js/script.js`         |
| Add/remove a project              | `js/script.js`         |
| Change colours                    | `css/style.css` → `:root` variables |
| Change your name / tagline        | `index.html` → Hero section |
| Add social links                  | `index.html` → search `✏️ EDIT` |
| Change section order              | `index.html` → move `<section>` blocks |

---

*Built for Dilip Kumar | Deployed via GitHub Pages*
