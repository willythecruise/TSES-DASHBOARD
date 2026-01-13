'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  videoUrl?: string | null;
  thumbnailUrl?: string | null;
}

export default function VideoPlayer({ videoUrl, thumbnailUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real app, you would start video playback here
  };

  return (
    <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
      {isPlaying && videoUrl ? (
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          {/* Video Thumbnail Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm">Video Placeholder</p>
              </div>
            )}
          </div>

          {/* Play Button Overlay */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
            aria-label="Play video"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </button>
        </>
      )}
    </div>
  );
}
