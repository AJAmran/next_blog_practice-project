'use client';

import Banner from "@/components/shared/Banner";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const Blogs = () => {
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  return (
    <>
      <Banner />
      <div className="grid grid-cols-3 gap-4 my-5 container mx-auto">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
