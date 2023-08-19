import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, gradient, title, content }) => (
  <div className={styles.hero}>
    {image ? (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    ) : gradient ? (
        <div className={styles.image} style={{ background: gradient }} />
    ) : null}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default Hero
