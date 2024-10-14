import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center my-5">
          Latest Blog from <span className="text-accent">Next Blog</span>
        </h1>
        <p className="text-lg md:text-xl text-center italic max-w-2xl mx-auto mb-12">
          Explore insightful articles and expert advice designed to inspire and
          inform.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {blogs.slice(0, 2).map((blog) => (
            <LatestBlogCard blog={blog} key={blog.id} />
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          {blogs.slice(2, 5).map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
