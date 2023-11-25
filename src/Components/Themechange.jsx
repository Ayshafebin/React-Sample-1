import React, { useState } from 'react'
import './Theme.css'

const Themechange = () => {

    const [themechange,setThemechange] = useState(true);



  return (
    <div className={`${themechange ? 'dark' : 'white'}`}>
        <button onClick={() => setThemechange(themechange => !themechange)}>Switch theme</button>
    </div>
  )
}

export default Themechange