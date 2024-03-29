import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Borstch © {new Date().getFullYear()}
    </div>
  </Container>
)

export default Footer
