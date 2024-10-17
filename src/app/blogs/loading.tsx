import BlogCardSkeleton from "@/components/ui/BlogCardSkeleton";
import { Blog } from "@/types";
import React from "react";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: Blog) => (
          <BlogCardSkeleton key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
