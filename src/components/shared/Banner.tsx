import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen-[70vh] lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Welcome to <strong className="text-accent">Our Blog</strong>
          </h1>

          <p className="mt-4 text-lg sm:text-xl sm:leading-relaxed">
            Explore insightful articles, tips, and industry trends that help you
            stay informed, inspired, and connected. Join our community and dive
            into topics that matter.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-accent px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Read Latest Posts
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-gray-700 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
