import React, { useEffect, useState } from 'react'
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase'

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("videos").onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => ({
            data: doc.data(),
            id: doc.id
        })))
    });

    return () => {
        unsubscribe();
    }
  },[]);


  return (
    <div className="app">
      <div className="app__top">
        <img className='app__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/100px-Instagram_logo_2016.svg.png" alt=""/>
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {
          videos.map(video => (
            <VideoCard 
              channel={video.data.channel}
              avatarSrc={video.data.avatarSrc}
              song={video.data.song}
              url={video.data.url}
              likes={video.data.likes}
              shares={video.data.shares}
              key={video.id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
