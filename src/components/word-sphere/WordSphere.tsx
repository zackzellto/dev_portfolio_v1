import React, { useEffect } from "react";

// Importing TagCloud package
import TagCloud from "TagCloud";

const WordSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      TagCloud(container, texts, options);
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
