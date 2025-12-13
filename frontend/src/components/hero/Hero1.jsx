import React from 'react'
import styles from './hero1.module.css'; 
import { IoIosArrowForward } from "react-icons/io";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

const Hero1 = () => {
  return (
    <div className={styles.Hero1}>
      <div className={styles.container}>

        {/* --- TOP SECTION (Headline + Description) --- */}
        <div className={styles.topSection}>
            <div className={styles.left}>
              <span>Crafting,</span>
              <span>Brands and</span>
              <span>Experiences</span>
            </div>

            <div className={styles.right}>
              <p>Based in Abuja, we're a digital products design & development studio that passoinate with the creation high applicability of digital experiences.</p>
              <button type="button">
                Learn more <IoIosArrowForward />
              </button>
            </div>
        </div>

        {/* --- BOTTOM SECTION (Icons + Stats) --- */}
        <div className={styles.bottomSection}>
          
          <div className={styles.socials}>
            <span className={styles.linkedin}><FiLinkedin color="rgb(222, 151, 38)" strokeWidth="3" /></span>
            <span className={styles.Twitter}><FiTwitter color="rgb(222, 151, 38)" strokeWidth="3" /></span>
            <span className={styles.Instagram}><IoLogoInstagram color="rgb(222, 151, 38)" strokeWidth="5" /></span>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <p>CLIENTS SATISFIED AND REPEATING</p>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>106+</span>
              <p>PROJECTS COMPLETED IN 11 COUNTRIES</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero1