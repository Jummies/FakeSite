import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [])
  return ( 
    <div className='not-found'>
      <h2>Sorry, that page does not exist... yet</h2>
      <Link href="/">Go back to the Homepage</Link>
    </div>
  );
}

export default NotFound;

