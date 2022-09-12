import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Header from '../comps/Header'
import Navbar from '../comps/Navbar'
import Video from '../comps/Video'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={'container'}>
      {/* <Head>
        <title>hi there</title>
        <meta name="keywords" content="nextjs" />
      </Head> */}
    
      <Header />

      
      <Video />
      
      

      <div>
        <div className="cake">
          <h2>Ready to have your cake and eat it too?</h2>
          <p>Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.</p>
        </div>
      </div>

    </div>

  )
}
