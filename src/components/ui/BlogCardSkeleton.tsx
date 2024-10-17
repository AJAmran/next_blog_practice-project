const BlogCardSkeleton = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl animate-pulse">
      <figure className="bg-gray-300 rounded-xl h-64 w-full"></figure>
      <div className="card-body">
        <div className="flex items-center justify-center bg-cyan-100 w-44 h-6 rounded-full"></div>
        <div className="h-6 bg-gray-300 rounded mt-4 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mt-2 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mt-2 w-2/3"></div>

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>

          <div className="flex items-center">
            <div className="h-5 w-5 bg-gray-300 rounded-full mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
