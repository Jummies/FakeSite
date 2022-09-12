import { useState, useEffect } from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Video = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchVideos()
  }, [])
  const fetchVideos = async () => {
    const response = await fetch ('https://vimeo.com/api/v2/channel/staffpicks/videos.json')
    const data = await response.json()
    setVideos(data)
  }

  return (  
    <section className="mid">
      <div>
        {
          videos.map(video => {
            return (
              <div key={video.id} className="vidblock">
                <div className="vidinfo">
                  <h2>{video.title}</h2>
                  <div className="viddesc"><a>{ video.description }</a></div>
                </div>
                <div className="vidplay">
                  <ReactPlayer 
                    url={video.url} 
                    width={520} 
                    height={300} 
                    light={  
                      <div className='light'>
                        <Image 
                          src={video.thumbnail_large}
                          alt={video.title}
                          width={580}
                          height={320}
                        />
                      </div>
                    }
                    playIcon={ 
                      <a href={video.url} target='_blank' rel='noreferrer' className="player">
                        <Image src='/assets/playbtn.png' alt='playbtn' width={130} height={130}/>
                      </a>
                    
                  }
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
    

  );
}

export default Video;