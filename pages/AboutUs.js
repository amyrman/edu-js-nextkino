import styles from '../styles/AboutUs.module.css'
import Image from 'next/image';
import Mars from '../public/pictures/mars.jpg'
import Salon from '../public/pictures/salon.jpg'

const AboutUs = () => {

  return (
    <div className = {styles.AboutUs}>
      <div className = {styles.AboutUsText}>
       <h2>Our story</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula purus vitae ultrices efficitur. Fusce semper nulla cursus mattis consequat. Phasellus congue elit sit amet rutrum ultrices. 
        Vivamus lorem nibh, ullamcorper sit amet consectetur nec, sodales et velit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula purus vitae ultrices eff
        </p>
      </div>
      <div className = {styles.AboutUsImages}>
        <Image
          src={Salon}
          className ={styles.SalonImage}
          width={800}
          height={500}
        />
        <Image 
          src={Mars}
          className={styles.MarsImage}
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}

export default AboutUs;
