import React from 'react'

import styles from './button.module.css'

function Button(props) {
  const { label } = props

  return (
    <button className={styles.button} type="button">
      {label}
    </button>
  )
}

export default Button
