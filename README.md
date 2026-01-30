# Account Manager – React Application

A simple **Account Manager** web application built using **React (Create React App)** and **Bootstrap**.
This project allows users to **register**, **login**, **view profile**, and **edit account details** using client-side storage.

---

## 🚀 Live Demo

👉 **Live URL:** `PASTE_YOUR_DEPLOYED_URL_HERE`


---

## 📸 Screenshots


### 🏠 Home Page

!(<src/assets/screenshots/Screenshot 2026-01-30 152500.png>)

### 📝 Register Page

!(<src/assets/screenshots/Screenshot 2026-01-30 152757.png>)

### 🔐 Login Page

!(<src/assets/screenshots/Screenshot 2026-01-30 152739.png>)

### 👤 Profile Page

!(<src/assets/screenshots/Screenshot 2026-01-30 152819.png>)


---

## 🧩 Features

* User Registration
* User Login
* Profile View & Edit
* Route Protection (Profile accessible only after login)
* Logout Functionality
* Responsive UI using Bootstrap
* LocalStorage-based data persistence

---

## 🛠️ Tech Stack

* **Frontend:** React (Create React App)
* **Styling:** Bootstrap 5
* **Routing:** React Router DOM v6
* **Storage:** Browser LocalStorage

---

## 📂 Project Structure

```
account-manager/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   └── Navbar.jsx
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── screenshots/
│   ├── home.png
│   ├── login.png
│   ├── register.png
│   └── profile.png
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/VirajPatel05/Account-Manager
cd account-manager
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm start
```

The app will run on:
👉 `http://localhost:3000`

---

## 🔐 Application Flow

1. User lands on the **Home Page**
2. Registers using the **Register Page**
3. Logs in via the **Login Page**
4. Redirected to **Profile Page**
5. Can edit profile details
6. Can logout and return to login page

---

## 📌 Validation & Logic

* All form fields are required
* Password must be at least 6 characters
* Email & password are validated during login
* User session handled using `localStorage`

---

## 📦 LocalStorage Usage

* `user` → stores registered user details
* `isLoggedIn` → stores login state

---

## 🧪 Known Limitations

* No backend (client-side only)
* Single user support
* Passwords are not encrypted (demo purpose)

---

## 👨‍💻 Author

**Viraj Patel**
Frontend / MERN Stack Developer

---

## 📄 License

This project is created for learning and evaluation purposes.

---

✅ **Submission Checklist**

* [ ] GitHub Repository Link Added
* [ ] Live URL Added
* [ ] Screenshots Added
* [ ] README Updated
