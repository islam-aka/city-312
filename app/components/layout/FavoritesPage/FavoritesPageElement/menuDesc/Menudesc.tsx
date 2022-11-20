import { appendFile } from 'fs'
import { type } from 'os'
import React, { FC, useState } from 'react'
import { IMenu } from '../Menudesc.interface'


//styles
import styles from './Menudesc.module.scss' 


type AO = {
  activeObject: { id: number }
  objects: {id:number}[]
}
const Menudesc: FC <{menuData: IMenu}>= (menuData) => {
  
  const [active, setActive] = useState<AO>({
    activeObject: {id:1},
    objects: [{id: 1},{id: 2},{id: 3}]
  });
  const [text, setText] = useState('text');

  const getTitle = (text:string) => setText(text) ;
  
  const toggleActive = (index :number) => {
    setActive({ ...active, activeObject: active.objects[index] });
  }
  // const toggleActiveDesc = (id: number) => {
  //   if (active.objects[id] === active.activeObject) {
  //     return <p> {active.objects[id].name}</p>
  //   } 
  // }
  return (
    <>
      <div className={styles.menuDesc}>
        {
          menuData.menuData.items.map((item, index) => (
            <div key={index} className={styles.menuDesc__detail}>
              <span onClick={() => toggleActive(index)}>
                <p 
                  className={
                    active.objects[index] === active.activeObject
                    ?
                    styles.active
                    :
                    styles.inactive} 
                    onClick={() => getTitle(item.description)}>
                  {item.title}
                </p>
              </span>
            </div>
            
            ))
          }
          <a href="#address">Адреса</a>
          <a href="#review">Отзывы</a>
      </div>
      <hr />
      <p>{text}</p>
    </>
  )
}

export default Menudesc

{/* <div onClick={() => setActive(false) }>Прочие условия:</div>
:
<div onClick={() => setActive(true) }>321</div> */}