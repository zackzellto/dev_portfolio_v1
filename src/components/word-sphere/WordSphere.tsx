import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const WordSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const icons = [
        "HTML",
        "CSS",
        "TypeScript",
        "JavaScript",
        "React",
        "NodeJS",
        "TailwindCSS",
        "NextJS",
        "MongoDB",
        "Docker",
        "Python",
        "Flask",
        "GIT",
        "GitHub",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      TagCloud(container, icons, options);
    };
  }, []);

  return (
    <>
      <div className="word-sphere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default WordSphere;
