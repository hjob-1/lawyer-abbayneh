import React from "react";
import Skeleton from "./Skeleton";

const SkeletonBlog = () => {
  return (
    <div className="skeleton_wrapper">
      <div className="skeleton_blog">
        <Skeleton type="title" />
        <Skeleton type="image" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <div className="avator_cont">
          <Skeleton type="avator" />
          <Skeleton type="avator_name" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBlog;
