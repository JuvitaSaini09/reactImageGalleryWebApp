import React from "react";

export const PopUPImage = ({
  individualImage,
  popUpState,
  setImageClicked,
  setPopUpState
}) => {
  const handlePopUpDisable = () => {
    setImageClicked(null);
    setPopUpState(false);
  };

  if (individualImage !== null) {
    console.log(individualImage);
  }
  return (
    <div
      style={popUpState ? { display: "block" } : { display: "none" }}
      className="popUpImageContainer"
    >
      {individualImage !== null && (
        <div>
          <div>
            {" "}
            <i onClick={handlePopUpDisable} className="fas fa-times"></i>
            <div className="flex-row-left">
              <img
                className="profileImage"
                src={individualImage.user.profile_image.small}
                alt="userProfile"
              />
              <div>
                {" "}
                <h2>{individualImage.user.name}</h2>
                <div>{individualImage?.sponsorship?.tagline}</div>
              </div>
            </div>
          </div>
          <div className="popupImageParent">
            <img
              className="popUpImage"
              src={individualImage.urls.regular}
              alt={individualImage.alt_description}
            />
            <a
              href={individualImage.links.download}
              className="imgDownloadLink"
            >
              Downlaod <i className="fas fa-download"></i>
            </a>

            <ul className="popUpImageDetails">
              <li>
                {" "}
                {individualImage.likes} <i className="fas fa-thumbs-up"></i>
              </li>
              <li>
                {" "}
                Published on : {individualImage.created_at.split("T").shift()}
              </li>
              <li>
                <a href={individualImage.user.social.portfolio_url}>
                  Click on the Link to visit user portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
