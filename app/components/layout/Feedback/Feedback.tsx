import React from 'react'

// styles
import styles from './Feedback.module.scss' 

const Feedback = () => {
  return (
    <div className={styles.Feedback}>
        <div className={styles.Feedback__Wrapper}>
            <h2>обратная связь</h2>
            <div className={styles.Wrapper__Text}>
                <form action="">
                    <input type="number" placeholder='+996 (000) 000 000' />
                    <textarea name="" id="" placeholder='Сообщение'></textarea>
                    <button>полный список</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Feedback