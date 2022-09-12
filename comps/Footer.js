import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (  
    


      <footer>
        
        <div className='footrest'>

          <div>
            <h3>Fakesite</h3>
            <p><a href='/about'>About us</a></p>
            <p><a href='/press'>Press</a></p>
            <p><a href='/policies'>Policies</a></p>
            <p><a href='/help'>Help</a></p>
          </div>

          <div>
            <h3>Account</h3>
            <p><a href='/editprofile'>Edit profile</a></p>
            <p><a href='/friends'>Friends</a></p>
            <p><a href='/social'>Social</a></p>
            <p><a href='/deleteprofile'>Delete Profile</a></p>
          </div>

        </div>


        <hr />
        <div className="footing">
          <div className="logo">
            <Image src='/assets/logo.png' alt='logo' width={70} height={54} />
          </div>
          <div>
            <Link href="/terms"><a>Terms</a></Link>
          </div>
          <div>
            <Link href="/privacy"><a>Privacy</a></Link>
          </div>
          <div>
            <Link href="/sitemap"><a>Site Map</a></Link>
          </div>
          
          
          
          
        </div>
        
      </footer>

    

  );
}

export default Footer;


      