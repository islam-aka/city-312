import React, { FC, HtmlHTMLAttributes, MouseEventHandler, useState } from 'react'


const Menudesc: FC = () => {

  const [active, setActive] = useState(false)
  function test() {
    console.log(active);
    
  }
  return (
    <div>
      {
        active ? 
        <div onClick={() => setActive(true) }>123</div>
        :
        <div onClick={() => setActive(true) }>321</div>
      }
    </div>
  )
}

export default Menudesc