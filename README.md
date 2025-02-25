# EntreConnect

🚀 **EntreConnect** is a MERN-stack platform where entrepreneurs can post their startup ideas, connect with investors/mentors, and collaborate with like-minded innovators. The platform leverages AI to group similar ideas and provides a feed of startup events and conferences.

## 🌟 Features

- **Entrepreneur Idea Posting** – Post startup ideas with key details.
- **Investor & Mentor Discovery** – Investors and mentors can browse and engage.
- **AI-Powered Idea Grouping** – Smart clustering of similar ideas.
- **Startup Events Feed** – Aggregated startup conferences, pitch meets, and more.
- **Community Discussion Forum** – Entrepreneurs, investors, and mentors can discuss ideas.
- **User Profiles** – Entrepreneurs, investors, and mentors have detailed profiles.
- **Interest Tracking** – Investors can save and track startups they are interested in.

---

## 🏗️ Tech Stack

### Frontend
- **React.js** – UI Framework
- **Redux Toolkit** – State Management
- **Tailwind CSS** – Styling
- **Axios** – API calls
- **React Router** – Navigation

### Backend
- **Node.js & Express.js** – Backend Framework
- **MongoDB** – Database
- **Mongoose** – ODM for MongoDB
- **JWT Authentication** – Secure login/logout

---

## 📂 Folder Structure

```
EntreConnect/
│── frontend/                # React App (Client Side)
│   │── src/
│   │   │── components/      # Reusable UI components
│   │   │── pages/           # Pages (Dashboard, Profile, etc.)
│   │   │── assets/          # Static assets
│   │   │── App.js           # Main App Component
│   │   └── index.js         # Entry point
│
│── backend/                 # Node.js API (Server Side)
│   │── models/              # Mongoose Models
│   │── routes/              # API Routes
│   │── controllers/         # Business Logic
│   │── middleware/          # Auth & Security
│   │── utils/               # Helper Functions
│   │── config/              # Database & Environment Config
│   │── server.js            # Express Server Entry
│
│── README.md                # Project Documentation
│── package.json             # Project Dependencies
│── .env                     # Environment Variables
│── .gitignore               # Git Ignore File
```

---

## 🎯 Functionality

### 1️⃣ **Entrepreneur Features**
- Create, update, delete startup ideas
- View AI-clustered similar ideas
- Connect with potential co-founders

### 2️⃣ **Investor/Mentor Features**
- Browse and filter startup ideas
- Show interest & connect with entrepreneurs

### 3️⃣ **AI-Powered Matching System**
- Groups similar startup ideas for collaboration

### 4️⃣ **Startup Events & News Feed**
- Aggregates upcoming startup conferences, pitch meets, etc.

### 5️⃣ **Community & Discussion Forum**
- Discuss startup challenges, fundraising, and mentorship

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js & npm** installed
- **MongoDB** (local or cloud database)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/EntreConnect.git
cd EntreConnect
```

### 2️⃣ Install Dependencies
```sh
# Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the `backend/` directory:
```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_api_key
```

### 4️⃣ Run the Application
```sh
# Start Backend Server
cd backend
npm run dev

# Start Frontend React App
cd ../frontend
npm start
```

---

## 🚀 Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** AWS / Render / Digital Ocean
- **Database:** MongoDB Atlas
---

## 📜 License
MIT License

---

## 📬 Contact
For inquiries or contributions, reach out at [your-email@example.com].
