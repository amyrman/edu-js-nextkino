import styles from '../styles/Home.module.css'  
import Herosection from '../components/Herosection'
import RecMovies from '../components/RecMovies'
import Link from 'next/link'

export default function Home() {
  return (
  <div className="HomePage">
    <div className="ImageSlider">
      <Herosection/>
    </div>
    <div className="SelectedMovies">
      <RecMovies /> 
    </div>
    <div className={styles.About}>
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
      <Link href = "/about"><a>read more..</a></Link>
    </div>
    <div className={styles.quote}>
      <h1>"No man can win every battle, but no man should fall without a struggle."</h1>
    </div>
  </div>
  )
}
