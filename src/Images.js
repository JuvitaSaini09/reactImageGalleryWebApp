import React from "react";
import "./images.css";

export const Images = ({ photos, setPopUpState, setImageClicked }) => {
  const handleImageClick = (img) => {
    setImageClicked(img);
    setPopUpState(true);
  };
  return (
    <div>
      {photos.length > 0 ? (
        <div className="apiImages">
          {photos.map((image) => {
            return (
              <li key={image.id} className="imageContainer">
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="apiImage"
                  onClick={() => handleImageClick(image)}
                />
                <div className="imageInfo flex-row">
                  <div className="flex-row ">
                    <img
                      className="profileImage"
                      src={image.user.profile_image.small}
                      alt="userProfile"
                    />
                    <div>{image.user.name}</div>
                  </div>
                  <div>
                    {image.likes} <i className="fas fa-thumbs-up"></i>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      ) : (
        <div>Loading.....</div>
      )}{" "}
    </div>
  );
};
