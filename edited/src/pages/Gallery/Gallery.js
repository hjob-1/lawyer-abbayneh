import React, { useEffect, useState } from "react";
import "../../styles/Gallery/gallery.css";

import SingleGallery from "./SingleGallery";
import axios from "axios";
import { FcNext, FcPrevious } from "react-icons/fc";
import Modal from "../../components/Modal";

import { MdCloudDownload } from "react-icons/md";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [pageNum, setPageNum] = useState();
  const [page, setPages] = useState(1);
  const [isOpen, setisOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [imgurl, setImgurl] = useState("");
  const [img, setImg] = useState("");

  const handleModal = async (id) => {
    const { data } = await axios.get(
      `https://www.server.abbaylaw.com/api/gallery/download/${id}`,
      {
        responseType: "blob",
      }
    );
    setImgurl(URL.createObjectURL(data));

    const selectedImg = gallery.find((single) => single.gallery_id === id);
    let { image } = selectedImg;

    setImg(image);
    setSelected(selectedImg);

    setisOpen(true);
  };

  const pagenumberGenerator = (pageNum, page) => {
    let pageArray = [];
    for (let x = 0; x < pageNum; x++) {
      pageArray.push(x + 1);
    }
    return pageArray.map((num) => (
      <span className={num === page && "active"}>{num}</span>
    ));
  };

  const handlebutton = (type) => {
    if (type === "next") {
      setPages(page + 1);
    } else setPages(page - 1);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://www.server.abbaylaw.com/api/gallery?page=${page}`
        );
        console.log(data);
        setGallery(data.gallery);
        setPageNum(data.pages);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [page]);

  return (
    <div className="galleryWrapper">
      <div className="galleryHeader">
        <div className="under_lay">
          <img src="./img/underlay.jpg" alt="ima" />
        </div>
        <div className="over_lay">
          <h1>Explore useful Documents</h1>
          <p>Where you can download it for completly free</p>
        </div>
      </div>
      <div className="gallery_wrapper">
        {gallery.length > 1 &&
          gallery.map((singleGallery) => (
            <SingleGallery
              singleGallery={singleGallery}
              handleModal={handleModal}
            />
          ))}
      </div>

      <div className="btns_wrapper">
        <button
          onClick={() => handlebutton("prev")}
          disabled={page !== 1 ? false : true}
        >
          <FcPrevious disabled={page !== 1 ? false : true} />
        </button>
        <button
          onClick={() => handlebutton("next")}
          disabled={page < pageNum ? false : true}
        >
          <FcNext />
        </button>
      </div>
      <div className="page_counter">{pagenumberGenerator(pageNum, page)}</div>
      <Modal isOpen={isOpen} setisOpen={setisOpen}>
        <div className="gallery__modal">
          <h1>{selected.gallery_title}</h1>
          <div className="gallery__modal_img">
            <img
              src={"https://www.server.abbaylaw.com/" + selected.image}
              alt="gallery"
            />
          </div>
          <a href={imgurl} download={img}>
            <span> Download </span>
            <MdCloudDownload className="icon-download" />
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
