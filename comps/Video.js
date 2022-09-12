import Vimeo from '@u-wave/react-vimeo';
import videos from './videos';





const Video = () => {

  console.log('tester');

  return (  
    <section className="mid">
      <div>
        {videos.map(video => (
          <div key={ video.id } className='vidblock'>


            <div className='vidinfo'>
              <h2>{ video.title }</h2>
              <a>{ video.description }</a>
            </div>

            <div className="vidplay">
              <Vimeo video={ video.id} width={520} height={300} />
            </div>


          </div>
        ))}
      </div>
    </section>
    

  );
}

export default Video;