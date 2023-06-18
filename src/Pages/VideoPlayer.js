import React from "react";
const VideoPlayer = () => {
  return (
    <div>
      <video controls className="w-100">
        <source src="./Video.mp4" type="video/mp4" />
        {/* Add additional <source> tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default VideoPlayer;
