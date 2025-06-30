import React, { useEffect, useState } from "react";

const techStack = [
  "Jason Witt - Portfolio",
  "Built with React.js",
  "Built with TypeScript",
  "Built with Tailwind CSS"
];

const RotatingBrowserTitle: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techStack.length);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = `${techStack[index]}`;
  }, [index]);

  return null;
};

export default RotatingBrowserTitle;
