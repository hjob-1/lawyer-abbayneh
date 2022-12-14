import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import BlogerScreen from "../pages/bloger/BlogerScreen";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Blogs from "../pages/Blog/Blogs";
import BlogerDetail from "../pages/bloger/BlogerDetail";
import BlogDetail from "../pages/Blog/BlogDetail";
import Profile from "../pages/Profile/Profile";
import Messages from "../pages/Messege/Messages";
import MessageDetails from "../pages/Messege/MessageDetails";
import AddBlog from "../pages/Blog/AddBlog";
import NavBar from "../components/NavBar/NavBar";

import "../components/SideBar/sidebar.css";
const Routers = () => {
  return (
    <Routes>
      <Route path="/blogers" element={<BlogerScreen />} />
      <Route path="/blogers/:user_id" element={<BlogerDetail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/messages/:id" element={<MessageDetails />} />
      <Route path={"/addblog"} element={<AddBlog />} />
    </Routes>
  );
};

export default Routers;
