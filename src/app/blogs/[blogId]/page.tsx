import BlogDetails from "@/components/ui/BlogDetials";
import { Blog, BlogId } from "@/types";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const SingleBlogHome = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="my-6">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default SingleBlogHome;
