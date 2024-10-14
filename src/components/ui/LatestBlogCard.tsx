import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { Blog } from "@/types";

interface BlogCardProps {
  blog: Blog;
}

const LatestBlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article className="card w-full bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
      <header className="relative">
        <Image
          src={blog.blog_image}
          width={600}
          height={400}
          alt={`Blog image for ${blog.title}`}
          className="rounded-t-lg h-72 object-cover w-full"
          priority={true}
        />
      </header>
      <div className="p-6">
        <time
          dateTime={blog.publish_date}
          className="flex items-center justify-center text-accent bg-cyan-100 w-44 px-3 py-1 rounded-full mb-4"
        >
          <FaCalendar className="mr-2" />
          {new Date(blog.publish_date).toLocaleDateString()}
        </time>
        <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
        <p className="text-gray-600 mb-5">
          {blog.description.length > 180
            ? blog.description.slice(0, 180) + "..."
            : blog.description}
          <Link
            href={`/blogs/${blog.id}`}
            className="text-accent ml-2 hover:underline"
          >
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              width={40}
              height={40}
              alt={`Author image for ${blog.author_name}`}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="font-medium">{blog.author_name}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <AiFillLike className="text-xl mr-1" /> {blog.total_likes} Likes
          </div>
        </div>
      </div>
    </article>
  );
};

export default LatestBlogCard;
