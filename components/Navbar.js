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
        <a>Movies</a>
        <a>Tickets</a>
        <a>About</a>
        </div>
    </nav>
  );
}

export default Navbar