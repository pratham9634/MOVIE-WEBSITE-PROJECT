import React from 'react'
import { useParams } from 'react-router-dom'

const Player = () => {
    const {id} = useParams();
    const url = `https://vidsrc.dev/embed/movie/${id}`;
  return (
    <div>
      <iframe
      src={url}
      style={{width: '100%', height: '100vh'}}
      title={`Player for movie ${id}`}
      allowFullScreen
      ></iframe>
    </div>
  )
}

export default Player
