import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (  
    <nav>
      <div className="logo">
        <Image src='/assets/logo.png' alt='logo' width={70} height={54} />
      </div>
      <div className="account">
        <Link href="/account"><p>Account</p></Link>
      </div>
      <div className="help">
        <Link href="/help"><p>Help</p></Link>
      </div>
      <div className="profilepic">
        <Link href="/profile"><img src='/assets/stockimage.png' alt='propic' /></Link>
      </div>
      
    </nav>
  );
}

export default Navbar;