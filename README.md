# 🚀 Productivity Tracker (Full Stack)

A fully deployed full-stack productivity tracking web application that helps users manage daily tasks, track progress, maintain streaks, and improve consistency.

---

## 🌐 Live Demo

🚀 **Frontend:**  
https://productivity-tracker-fullstack-m680o6aau-arti5803s-projects.vercel.app  

⚙️ **Backend API:**  
https://productivity-tracker-fullstack.onrender.com  

---

## 📌 Features

- ➕ Add new tasks  
- ✅ Mark tasks as completed  
- 📋 View tasks dynamically  
- 📊 Track daily & weekly progress (Chart.js)  
- 🔥 Streak tracking system  
- 🎯 Set daily goals  
- 🌙 Light/Dark mode toggle  
- ☁️ Persistent data storage using MongoDB  

---

## 🛠️ Tech Stack

### 🔹 Frontend
- HTML  
- CSS  
- JavaScript  
- Chart.js  

### 🔹 Backend
- Node.js  
- Express.js  

### 🔹 Database
- MongoDB  

### 🔹 Deployment
- Frontend: Vercel  
- Backend: Render  

---

## 📂 Project Structure
```
productivity-tracker-fullstack/
│
├── frontend/
│ ├── index.html
│ ├── index.css
│ └── index.js
│
└── backend/
├── server.js
├── package.json
├── models/
├── routes/
└── config/
```

---

## ⚙️ Setup Instructions (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Arti5803/productivity-tracker-fullstack.git
cd productivity-tracker-fullstack
```
### 2️⃣ Setup Backend

```bash
cd backend
npm install
node server.js
```
👉 Server runs on:
http://localhost:3000

3️⃣ Setup Database (MongoDB)

Create a `.env` file in the backend folder and add:

MONGO_URI=your_mongodb_connection_string

4️⃣ Run Frontend
Open frontend/index.html using Live Server

👉 Runs on:
http://127.0.0.1:5500

## 🔗 API Endpoints
###📥 Get All Tasks
GET /tasks

###➕ Add Task
POST /tasks

###✏️ Update Task 
PUT /tasks/:id

###❌ Delete Task 
DELETE /tasks/:id

## 🧠 Key Concepts Implemented

- Full-stack architecture (Frontend ↔ Backend ↔ Database)  
- REST API integration  
- CORS handling  
- Dynamic DOM manipulation  
- State management using backend (instead of localStorage)  
- Data persistence using MongoDB  
- Deployment of full-stack application  

---

## 🚧 Future Improvements

- 🔐 User Authentication (Login/Signup)  
- ✏️ Edit tasks  
- 📱 Fully responsive design  
- 🔔 Notifications & reminders  
- 📊 Advanced analytics
---

## 👩‍💻 Author

**Arti Lodhi**

---

## ⭐ Project Highlights

- ✔️ Built and deployed a full-stack web application  
- ✔️ Integrated frontend with backend APIs  
- ✔️ Implemented database for persistent storage  
- ✔️ Solved real-world issues like CORS and deployment  

📸 Screenshots 
![App Screenshot](.<img width="1742" height="871" alt="readme2" src="https://github.com/user-attachments/assets/17d4a7bf-8e0b-4ed7-a66a-5c3adc50b63e" />
<img width="1816" height="956" alt="readme1" src="https://github.com/user-attachments/assets/aec55fab-6d27-4d67-88f8-99d0fe9cfaa1" />
)
