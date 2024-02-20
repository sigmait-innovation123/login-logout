import React from 'react'
import Header from './header'
import Herosection from './herosection'

export default function Wholepage({handlebtn, setHandlebtn, uname, setUname}) {

  

  return (
    <div>
        <Header handlebtn={handlebtn} setHandlebtn={setHandlebtn} uname={uname} setUname={setUname} />
        <Herosection />
    </div>
  )
}
