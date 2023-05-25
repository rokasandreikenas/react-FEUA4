import { useState, useEffect } from "react";
import { randomIntFromInterval } from "../../utils/numbers";
import Photo from "../Photo/Photo";

const RandomPhotos = () => {
  const [photoId, setPhotoId] = useState(null);
  const [photo, setPhoto] = useState(null);

  const generateRandomPhotoId = () => {
    const photoId = randomIntFromInterval(1, 1500);
    setPhotoId(photoId);
  };

  useEffect(() => {
    if (photoId !== null) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then((resp) => resp.json())
        .then((response) => {
          setPhoto(response);
        })
        .catch((error) => console.error(error));
    }
  }, [photoId]);

  return (
    <div>
      <button onClick={generateRandomPhotoId}>
        {photoId === null
          ? "Generate our first photo"
          : "Generate next random photo"}
      </button>
      <br />
      <br />
      {photo && <Photo url={photo.url} title={photo.title} />}
    </div>
  );
};

export default RandomPhotos;
