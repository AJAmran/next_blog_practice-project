import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex space-x-3">
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Loading;
