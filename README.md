# profile_card
Responsive Profile Card

This project is a responsive profile card built using HTML, CSS, and JavaScript. It includes essential profile details such as name, job title, bio, location, social links, and a dynamically updating current UTC time.

Features

✅ Profile Picture (Responsive)
✅ Full Name & Job Title
✅ Short Bio (50-100 words)
✅ Current Location (City & Country)
✅ Email Address (Professional)
✅ Social Links (LinkedIn, GitHub, etc.)
✅ Live UTC Time Display (Updates every second)

Project Structure

/profile-card
│── index.html          # Main HTML file  
│── styles.css          # CSS for styling  
│── script.js           # JavaScript for live UTC time  
│── assets/             # Folder for profile picture  
│── README.md           # Project documentation  

Installation & Usage
 1. Clone the repository:

git clone <https://github.com/yourusername/profile-card.git>

 2. Navigate to the project folder:

cd profile-card

 3. Open index.html in a browser.

JavaScript Functionality

The script.js dynamically updates the UTC time every second:
 • updateUTCTime() → Fetches and displays the current UTC time.
 • setInterval(updateUTCTime, 1000) → Ensures real-time updates every second.

Contributing

Feel free to fork this project and add new features!
 1. Fork the repository
 2. Create a new branch: git checkout -b feature-branch
 3. Commit changes: git commit -m "Added new feature"
 4. Push changes: git push origin feature-branch
 5. Create a Pull Request

License

This project is open-source and available under the MIT License.

🚀 Happy Coding! 🚀
