import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Images } from "./Images";
import { PopUPImage } from "./popupImage";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchImageName, setSearchImageName] = useState("");
  const [popUpState, setPopUpState] = useState(false);
  const [imageClicked, setImageClicked] = useState(null);

  const handleSearchBtn = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchImageName}&client_id=LQP3RujeB0uU4ibSpOTQKbSBm9M3ZqBIEAtZuu6o9DI`
      );
      setPhotos(response.data.results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=LQP3RujeB0uU4ibSpOTQKbSBm9M3ZqBIEAtZuu6o9DI"
        );
        setPhotos(response.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <div className={popUpState ? "open-modal-bg-disable" : null}>
        <h1>Unsplash Images</h1>
        <div>
          <input
            placeholder="search images here...."
            value={searchImageName}
            onChange={(e) => setSearchImageName(e.target.value)}
            className="searchImageInput"
          />
          <button className="searchBtn" onClick={handleSearchBtn}>
            Search
          </button>
        </div>
        <Images
          photos={photos}
          setPopUpState={setPopUpState}
          setImageClicked={setImageClicked}
        />
      </div>
      <PopUPImage
        individualImage={imageClicked}
        popUpState={popUpState}
        setImageClicked={setImageClicked}
        setPopUpState={setPopUpState}
      />
    </div>
  );
}
