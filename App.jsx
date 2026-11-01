import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [photos, setPhotos] = useState([]);

  // Fetch photos from API
  useEffect(() => {

    fetch("https://picsum.photos/v2/list?page=1")
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      })
      .catch(error => {
        console.log("Error fetching photos:", error);
      });

  }, []);

  return (
    <div className="container">

      <h1>Photo Gallery</h1>

      <div className="gallery">

        {photos.map((photo) => (

          <div className="photo-card" key={photo.id}>

            <img
              src={photo.download_url}
              alt={photo.author}
            />

            <div className="photo-info">

              <h3>{photo.author}</h3>

              <button>👍 0</button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;