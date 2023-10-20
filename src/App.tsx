import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('play', () => {
        setTimeout(() => setShowBanner(true), 5000);
      });
    }
  }, []);

  return (
    <div className="App">
      <video
        ref={videoRef}
        src="./assets/vandam.mp4"
        autoPlay
        loop
        muted
        width="1280"
        height="720"
      />
      {showBanner && (
        <div className="banner">
          баннер
        </div>
      )}
    </div>
  );
}

export default App;
