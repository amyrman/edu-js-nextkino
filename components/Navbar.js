import Link from 'next/link'
import styles from '../styles/Nav.module.css'


const Navbar = () => {
  return (
    <nav className={styles.Nav}>
        <div className='login'>
          <a>Login</a>
        </div>
        <div className={styles.NavLogo}>
            <h1>Kino On Mars</h1>
        </div>
        <div className="links">
        <Link href="/"><a>Home</a></Link>
        <Link href="/movies"><a>Movies</a></Link>
        <a>Tickets</a>
        <Link href="/AboutUs"><a>About</a></Link>
        </div>
    </nav>
  );
}

export default Navbar
