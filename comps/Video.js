import Vimeo from '@u-wave/react-vimeo';
import videos from './videos';

import Image from 'next/image';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


const Video = () => {

  console.log('tester');

  return (  
    <section className="mid">

      <div>
        {videos.map(video => (
          <div key={ video.id } className='vidblock'>


            <div className='vidinfo'>
              <h2>{ video.title }</h2>
              <div className="viddesc"><a>{ video.description }</a></div>
            </div>

            <div className="vidplay">
              
              {/* <Vimeo video={ video.id} width={520} height={300} /> */}
              <ReactPlayer 
                url={video.url} 
                width={520} 
                height={300} 
                light={video.thumbnail_medium}
                playIcon={ <Image src='/assets/playbtn.png' alt='playbtn' width={140} height={140}/>}
              />
            </div>


          </div>
        ))}
      </div>
    </section>
    

  );
}

export default Video;