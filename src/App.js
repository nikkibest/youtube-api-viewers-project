import './App.css';
import React, {useState, useEffect} from 'react'
import StatsCard from './StatsCard'
import youtubeProfile from '../src/youtubeProfile.jpg'


function App() {
  // Youtube API key - AIzaSyAJQ0Ld3KQzmpWgnWABAvN4tQmU2KCbz8I
  // Channel ID - UCWJV1nhZSRqS58vZQS2xP5A

  const [base, setBase] = useState()
  const [subscribeCount, setSubscribeCount] = useState()
  const [viewCount, setViewCount] = useState()
  const [videoCount, setVideoCount] = useState()

  const fetchData = async () => {
    const youtubeUser = `UCWJV1nhZSRqS58vZQS2xP5A`
    const youtubeKey = `AIzaSyAJQ0Ld3KQzmpWgnWABAvN4tQmU2KCbz8I`
    const API_URL = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    const data = await API_URL.json()
    const base = data.items[0].statistics
    setVideoCount(base.videoCount)
    setSubscribeCount(base.subscribeCount)
    setViewCount(base.viewCount)
    setBase(base)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
        <div>Hello world</div>
        <StatsCard sub = {subscribeCount} view={viewCount} video = {videoCount} />
        <a href = 'https://www.youtube.com/watch?v=orPtBaxY3Nw&t=1s' target='_blank' rel='noreferrer'><img src={youtubeProfile} alt='Youtube Profile'></img></a>

    </div>
    
  );
}

export default App;
