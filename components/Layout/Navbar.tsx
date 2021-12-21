import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuicon, setmenuicon] = useState(false);
  return (
    <nav className="flex_div" style={{ background: '#1d0919d6' }}>
      <Link href="/">
        <a className="logo">
          <span style={{ background: 'black' }}>BEST</span> <span>Series</span>
        </a>
      </Link>
      <div id="menuIcon">
        <Image
          src="/menu.svg"
          alt="menu"
          onClick={() => (menuicon ? setmenuicon(false) : setmenuicon(true))}
          width="50"
          height="50"
          layout="responsive"
        />
      </div>
      <ul className={menuicon ? 'menu menu_active' : 'menu'}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/movie/popular">Popular Movie</Link>
        </li>

        <li>
          <Link href="/movie/upcoming">Upcoming Movie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
