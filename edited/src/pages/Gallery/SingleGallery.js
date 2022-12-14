import React from "react";

const SingleGallery = ({ singleGallery, handleModal }) => {
  const { image, gallery_id } = singleGallery;
  console.log(image);
  return (
    <div
      className="galleryMain "
      id={"img" + gallery_id}
      onClick={() => handleModal(gallery_id)}
    >
      <div className="gallery-img">
        {image && (
          <img
            src={"https://www.server.abbaylaw.com/" + image}
            alt=" gallery"
          />
        )}
      </div>
    </div>
  );
};

export default SingleGallery;
