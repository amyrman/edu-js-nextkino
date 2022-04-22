import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className='login'>
          <a>Login</a>
        </div>
        <div className="logo">
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