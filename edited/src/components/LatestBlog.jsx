import axios from "axios";
import React, { useEffect, useState } from "react";

import { posts } from "../posts";
import LatestBlogDetail from "./LatestBlogDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestBlog = () => {
  const [latest, setLatest] = useState([]);
  const [fetcher, setfetching] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: latest.length > 3 ? true : false,
    autoPlaySpeed: 3000,
    slidesPerRow: 1,
    rows: 3,
    vertical: true,
    arrows: false,
  };

  useEffect(() => {
    const fetchdata = async () => {
      setfetching(true);
      const { data } = await axios.get(
        "https://www.server.abbaylaw.com/api/blogs/findblog?new=true"
      );
      setLatest(data.blogs);
      setfetching(false);
    };
    fetchdata();
  }, []);

  return (
    <div className="__latest-posts">
      <h3>
        {/* <span className="special">RECENTLY </span> Post */}
        RECENTLY POSTED BLOG
      </h3>
      {fetcher ? (
        "loading"
      ) : (
        <div>
          {
            latest.length < 1 ? (
              "Latest Post isn't Available"
            ) : (
              // latest.length>3?
              <Slider {...settings}>
                {latest.map((singlePost, index) => (
                  <LatestBlogDetail
                    singlePost={singlePost}
                    index={index}
                    key={singlePost.blog_id}
                  />
                ))}
              </Slider>
            )

            //   : latest.map((singlePost,index) =>
            // <LatestBlogDetail singlePost={singlePost} index={index}/>)
            // }
          }
        </div>
      )}
    </div>
  );
};

export default LatestBlog;

// {
//   fetcher ? (
//     "loading"
//   ) : (
//     <div>
//       {latest.length < 1 ? (
//         "Latest Post isn't Available"
//       ) : latest.length > 3 ? (
//         <Slider {...settings}>
//           {latest.map((singlePost, index) => (
//             <LatestBlogDetail
//               singlePost={singlePost}
//               index={index}
//               key={singlePost.blog_id}
//             />
//           ))}
//         </Slider>
//       ) : (
//         latest.map((singlePost, index) => (
//           <LatestBlogDetail singlePost={singlePost} index={index} />
//         ))
//       )}
//     </div>
//   );
// }
