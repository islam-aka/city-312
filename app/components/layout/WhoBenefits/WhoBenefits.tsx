import Image from 'next/image'
import React, { FC } from 'react'

import circle from '../../../assets/images/Circle.png'

import styles from './WhoBenefits.module.scss'

const WhoBenefits: FC = () => {
  return (
  <div className={styles.whoBenefits}>
    <div className={styles.whoBenefits_description}>
      <h2>Кому это выгодно? </h2>
        <p>
          Выгоду получают все без исключения. Клиенты приобретают услуги и товары на выгодных для себя условиях.  Продавцы, за счет выгодных предложений, увеличивают товарооборот и благодаря поисковой системе внутри Единой дисконтной  карта "312", создают целевую аудиторию. 
        </p>
    </div>
    <div className={styles.whoBenefits_Cube}>
      <div className={styles.whoBenefits_infoCube}>
        <div className={styles.whoBenefits_infoCube_desc}>
          <p>примерная</p>
          <h3>выгода для пользователей карт</h3>
        </div>
        <div className={styles.whoBenefits_infoCube_CircleOverlay}>
          <Image className={styles.circleImg} src={circle} alt='circle' />
          <p className={styles.circleText}>100%</p>
        </div>
      </div>

      <div className={styles.whoBenefits_infoCube}>
        <div className={styles.whoBenefits_infoCube_desc}>
          <p>примерная</p>
          <h3>выгода для пользователей карт</h3>
        </div>
        <div className={styles.whoBenefits_infoCube_CircleOverlay}>
          <Image className={styles.circleImg} src={circle} alt='circle' />
          <p className={styles.circleText}>100%</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default WhoBenefits