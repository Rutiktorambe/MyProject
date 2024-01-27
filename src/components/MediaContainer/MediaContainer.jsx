import React from 'react';

const MediaContainer = ({ mediaUrl, type, caption }) => {
  const isImage = type === 'image';
  const isVideo = type === 'video';

  return (
    <div className="my-4">
      {isImage && (
        <img
          src={mediaUrl}
          alt="Image"
          className="w-100 h-80 object-cover rounded-md shadow-lg"
        />
      )}
      {isVideo && (
        <iframe
          title="Video"
          width="100%"
          height="200"
          src={mediaUrl}
          frameBorder="0"
          allowFullScreen
          className="rounded-md shadow-lg"
        ></iframe>
      )}
      {caption && <p className="mt-2 text-gray-600">{caption}</p>}
    </div>
  );
};

export default MediaContainer;


// // Example usage for Image
// <MediaContainer
//   mediaUrl="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
//   type="image"
//   caption="A beautiful image"
// />

// // Example usage for Video
// <MediaContainer
//   mediaUrl="https://youtu.be/px7rlaxC8YI?si=Q8FuQTtXJjiensfX"
//   type="video"
//   caption="An informative video"
// />