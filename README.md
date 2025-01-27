```markdown
# 🌍 Live Location Tracker 🚀  
A **React.js** application to simulate a WhatsApp-like group interface where users can join via a link, enable location sharing, and save their latitude and longitude to Firebase in real time. It also includes a feature for live location tracking for a specific time span.  

---

## ⚡ Features  
- 🖼️ **WhatsApp-like Interface**: Simple and user-friendly UI for interaction.  
- 📍 **Location Prompt**: Requests location permission when the user clicks the group link.  
- 🛰️ **Real-Time Location Tracking**: Tracks and saves user coordinates to Firebase every 10 seconds for 5 minutes.  
- 🔄 **State Management**: Handled efficiently with Redux for seamless updates.  
- 🌐 **Firebase Integration**: Stores user location data securely in Firestore.  

---

## 🛠️ Tech Stack  
- **Frontend**: React.js with Redux for state management.  
- **Database**: Firebase Firestore for real-time data storage.  
- **Deployment**: Hosted on Vercel for a globally accessible web-app.  

---

## 🚀 Installation and Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/AlankrithaS/live_location_tracker.git
   cd live_location_tracker
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Set up Firebase:  
   - Add the following keys in your `.env` file (replace with your Firebase credentials):  
     ```env
     REACT_APP_API_KEY=your_api_key
     REACT_APP_AUTH_DOMAIN=your_auth_domain
     REACT_APP_PROJECT_ID=your_project_id
     ```  
   - Update `firebase.js` with environment variables.  
4. Start the development server:  
   ```bash
   npm start
   ```
5. Open the app at `http://localhost:3000`.  

---

## 📂 Project Structure  
```
geo-tracker/
│
├── public/               # Public files (HTML, icons, etc.)
├── src/                  # Application source code
│   ├── components/       # UI components
│   ├── redux/            # State management with Redux
│   ├── styles/           # CSS files
│   └── firebase.js       # Firebase configuration
│
├── .gitignore            # Ignored files for Git
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## ✨ Usage  
1. **Joining the Group**:  
   - The user receives a link like "Join School WhatsApp Group."  
   - On clicking, the app prompts for location permissions.  

2. **Location Tracking**:  
   - After granting permission, the app saves the user's real-time coordinates to Firebase Firestore.  
   - Tracking continues every 10 seconds for 5 minutes.  

3. **Live Location Sharing (Optional)**:  
   - Future implementation: Stream location for hours or days.  

---

## 🛡️ Security  
- Environment variables (`.env`) are used to secure Firebase API keys.  
- Location data is stored securely in Firestore.  

---

## 🌟 Deployment on Vercel  
1. Push the code to GitHub.  
2. Link the repository to Vercel.  
3. Add Firebase environment variables on the Vercel dashboard.  
4. Deploy the project and enjoy your hosted app!  

---

## 🧑‍💻 Contributions  
Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a PR.  

---

## 📝 License  
This project is licensed under the MIT License.  

---

## 📷 Screenshots  
![ui](https://github.com/user-attachments/assets/52abe5d2-98fa-4e96-9c4f-19179da1a487)
![backend](https://github.com/user-attachments/assets/36ac4032-054b-4501-b35d-5cff8a275baa)

```

---
