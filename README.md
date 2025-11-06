# Personal Portfolio — Helber Soares

This is my personal portfolio website, built to present my professional background, skills, projects, and contact information.  
It includes a dedicated page called **GitFind**, which automatically lists all my public GitHub repositories using the GitHub REST API.

---

## 🌐 Live Demo
(Insert link when deployed)  
Example: `https://helbersoares.dev`

---

## 👤 About Me

**Name:** Helber Soares  
**Role:** Full Stack Developer & AI Specialist  
**Stack:** TypeScript, Node.js, React, Express, REST APIs, PostgreSQL, Docker  
**Based in:** Rio de Janeiro, Brazil

I focus on building efficient, scalable web applications and integrating automation and AI solutions into modern systems.

---

## 📄 Pages Included

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Introduction, quick links, and navigation |
| About | `about.html` | Profile, background summary |
| Hobbies | `hobbies.html` | Personal interests, icons included |
| Resume | `resume.html` | ATS-friendly résumé with clean visual layout |
| GitFind | `gitfind.html` | Lists all public GitHub repositories dynamically |
| Contact | `contact.html` | Contact details + direct WhatsApp link |

---

## 🧠 GitFind Feature

The page `gitfind.html` uses the **GitHub Public REST API**:

GET https://api.github.com/users/helberjf/repos?per_page=100&sort=updated


- Shows only **public repositories**
- Displays:
  - Repository name (linked)
  - Description
  - Stars count
  - Primary language
  - Last update date
- Automatically updates when repositories change
- No authentication needed

---

## 🎨 Design System

- Dark/Light color scheme harmonized with professional corporate UI
- Modern typography: **Inter** and **Poppins**
- Icon support via **Font Awesome**
- Responsive for mobile (designed for iPhone screens and above)

---

## 🧱 Project Structure

/
├─ index.html
├─ about.html
├─ hobbies.html
├─ resume.html
├─ gitfind.html
├─ contact.html
├─ styles.css
└─ assets/
└─ images/

---

## 🚀 Running Locally

### 1) Clone the repository
```bash
git clone https://github.com/helberjf/portfolio.git
cd portfolio

2) Open the project

You can simply open index.html in your browser.
Or use a local server (recommended):

npx serve .

python3 -m http.server 5500


🛠️ Tech Stack
Category	Technology
Frontend	HTML5, CSS3, JavaScript
Icons	Font Awesome
APIs	GitHub REST API
Layout	Responsive + Mobile-first

📜 License

This project is open for learning and personal reference.
You may adapt the structure while maintaining credit.