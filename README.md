Digital Kenya Science & Engineering Fair (KSEF) Management System
🚀 Streamlining Science Fair Competitions for Efficiency & Transparency

📌 Overview
The Digital KSEF Management System is a web-based platform designed to automate project registration, 
judge scoring, and ranking for science fairs. It ensures efficiency, 
transparency, and seamless competition management, eliminating manual paperwork.

🎯 Key Features
✅ Automated Project Registration – Schools register projects online.
✅ Role-Based Access – Admins, Judges, and School Patrons have secure logins.
✅ Judging & Scoring System – Judges score projects digitally with automated ranking.
✅ Real-Time Leaderboard – Projects ranked instantly based on judges' evaluations.
✅ Admin Dashboard – Manage users, projects, and score distribution.
✅ Secure Authentication – JWT-based authentication for different roles.
✅ Mobile-Friendly UI – Accessible on both desktop & mobile.
✅ Deployment – Frontend on Netlify, backend on Render with MongoDB Atlas.

📂 Folder Structure

digital-science-fair-manager/
│── client/             # Frontend (React)
│   ├── src/            # React components
│   ├── public/         # Static assets
│   ├── package.json    # Frontend dependencies
│── server/             # Backend (Node.js & Express)
│   ├── models/         # Database models
│   ├── routes/         # API endpoints
│   ├── config/         # Database connection & environment variables
│   ├── server.js       # Main backend entry file
│   ├── package.json    # Backend dependencies
│── README.md           # Project Documentation
│── .gitignore          # Ignored files for Git
🛠️ Tech Stack
Frontend:
🔹 React.js – UI framework
🔹 Bootstrap/Tailwind CSS – Styling
🔹 Axios – API calls

Backend:
🔹 Node.js & Express.js – API & server logic
🔹 MongoDB Atlas – Database
🔹 Mongoose – ODM for MongoDB
🔹 JWT Authentication – Secure login

Deployment:
🔹 Frontend – Netlify
🔹 Backend – Render
🔹 Database – MongoDB Atlas

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/digital-science-fair-manager.git
cd digital-science-fair-manager

2️⃣ Backend Setup
cd server
npm install
npm run dev
Ensure .env contains your MongoDB connection string & JWT secret.

3️⃣ Frontend Setup
cd client
npm install
npm start

🌐 Frontend (Netlify): ksefportal1.netlify.app
🌐 Backend (Render): To be Uploaded

👥 Contributors
Joel Maluki Kasyoka – Project Lead & Developer

📧 Contact & Support
For any queries or contributions, contact malukijoe7@gmail.com or open an issue on GitHub.
