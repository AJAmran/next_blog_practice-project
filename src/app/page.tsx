import LatestBlogs from "@/components/latestBlogs/LatestBlogs";
import Banner from "@/components/shared/Banner";
import React from "react";

const Home = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  
  return (
    <div>
      <Banner />
      <LatestBlogs blogs={blogs} />
    </div>
  );
};

export default Home;
