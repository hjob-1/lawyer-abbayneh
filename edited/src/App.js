import React from "react";
import { Routes, Route } from "react-router-dom";
import { images } from "../src/img";
import About from "./pages/About/About";
import Header from "./pages/Home/Header";
import MainSection from "./pages/Home/main";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blog";
import "./app.css";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import CopyRight from "./components/CopyRight";

import Video from "./pages/video/Video";
import SkeletonBlog from "./components/SkeletonBlog";
import LatestBlog from "./components/LatestBlog";
import Footer from "./pages/Home/footer";
import Call from "./components/Call";

const App = () => {
  return (
    <section style={{ position: "relative" }}>
      <Header />

      <Routes>
        <Route path="/" element={<MainSection />} />

        <Route path="/about" element={<About images={images} />} />

        <Route path="/galleries" element={<Gallery />} />

        <Route path="/videos" element={<Video />} />

        <Route
          path="/blog"
          element={
            <Blog>
              <SkeletonBlog />
              <LatestBlog />
            </Blog>
          }
        />
        <Route path="/blog/:id" element={<BlogDetail />} />

        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
      <CopyRight />
      {/* <Call /> */}
    </section>
  );
};

export default App;
