import { useState } from "react";
import "./App.css";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalUrl) {
      alert("Please enter a URL");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/short", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          originalUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortUrl(data.shortUrl);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-class">
      <form className="url-form" onSubmit={handleSubmit}>
        <h1>URL Shortener</h1>

        <input
          type="text"
          placeholder="Enter URL"
          className="enter-url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />

        <button type="submit" className="url-button">
          {loading ? "Generating..." : "Generate"}
        </button>

        {shortUrl && (
          <div className="link-box">
            <p>Short URL:</p>
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;