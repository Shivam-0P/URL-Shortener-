# 🔗 URL Shortener

A full-stack URL Shortener application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can convert long URLs into short, shareable links and track the number of clicks on each shortened URL.

## 🚀 Features

- Shorten long URLs instantly
- Generate unique short links
- Redirect users to the original URL
- Track click counts
- Responsive React frontend
- RESTful API with Express.js
- MongoDB database integration

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- ShortID / NanoID
- CORS
- dotenv

## 📂 Project Structure

```bash
UrlShortner/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── index.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/UrlShortner.git
cd UrlShortner
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```bash
http://localhost:5173
```

## 📌 API Endpoints

### Create Short URL

```http
POST /api/short
```

Request Body:

```json
{
  "originalUrl": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "abc123"
}
```

### Redirect URL

```http
GET /:shortUrl
```

Redirects users to the original URL and increments the click count.

## 📸 Screenshots

Add screenshots of your application here.

## 🔮 Future Improvements

- User Authentication
- URL Analytics Dashboard
- Custom Short URLs
- QR Code Generation
- Expiration Dates for URLs

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Shivam Rawani**

GitHub: https://github.com/yourusername
LinkedIn: https://linkedin.com/in/yourprofile
