import React from "react";

const Title = ({ name, className }: { name: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-pink-400 transition-all">
        {name}
      </h1>
      <div className="w-40 h-2 bg-pink-500 rounded-full"></div>
      <div className="w-40 h-2 bg-cyan-300 rounded-full translate-x-2"></div>
    </div>
  );
};

export default Title;
