import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const photosExists = photos.length > 0;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => {
        setPhotos(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="photos">
      {photosExists && (
        <>
          <Photo url={photos[0].url} title={photos[0].title} />
          <Photo url={photos[1].url} title={photos[1].title} />
          <Photo url={photos[2].url} title={photos[2].title} />
        </>
      )}
    </div>
  );
};

export default Photos;
