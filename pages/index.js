import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'  
import Herosection from './herosection'
import RecMovies from '../components/RecMovies';

export default function Home() {
  return (
  <div className="HomePage">
    <div className="ImageSlider">
      <Herosection/>
    </div>
    <div className="SelectedMovies">
      <RecMovies /> 
    </div>
    <div className="AboutUsHome">
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
      <a>read more..</a>
    </div>
    <div className="MovieQuote">
      <h1>MOVIEQUOTE</h1>
    </div>
  </div>
  )
}
