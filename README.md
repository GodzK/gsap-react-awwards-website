# Demon Slayer: Infinity Castle – Next.js Project

A fan-made Next.js web application inspired by the *Demon Slayer: Kimetsu no Yaiba – Infinity Castle* arc.  
This project showcases characters, story details, and thematic highlights, with dynamic data rendering from JavaScript objects.

---

## 📂 Project Structure

```
.
├── public/           # Static assets (images, icons, etc.)
├── pages/            # Next.js pages (routes)
├── components/       # Reusable UI components
├── styles/           # Global and component-specific styles
├── data.js           # Themed data arrays and objects
└── README.md
```

---

## 🚀 Features

- **Dynamic Navigation** – Rendered from `navLinks` data.
- **Character Lists** – Divided into main characters (`cocktailLists`) and supporting characters (`mockTailLists`).
- **Profile Avatars** – Rendered from `profileLists`.
- **Feature Highlights** – Cinematic qualities from `featureLists` and `goodLists`.
- **Store Info** – Custom section for release location or viewing details.
- **Opening Hours** – Flexible schedule format.
- **Social Links** – Configurable icons and URLs.
- **All Characters Page** – Details each main character with image, title, and description.

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/demon-slayer-infinity-castle.git
   cd demon-slayer-infinity-castle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**  

---

---

## 🖼 Theming

- Images are stored in `/public/images`.
- Easily swap character images or background art by replacing the files with the same names.
- Update `data.js` for instant text changes without touching component logic.

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React-based)
- **Styling:** CSS / SCSS / TailwindCSS (optional)
- **Language:** JavaScript (ES6+)
- **Data Handling:** Static data arrays & props

---

## 📜 License

This is a **fan project** for educational/demo purposes only.  
All characters, names, and references belong to © Koyoharu Gotouge / Shueisha, Aniplex, Ufotable.

---
