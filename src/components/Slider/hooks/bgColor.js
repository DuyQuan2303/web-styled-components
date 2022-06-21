import React from 'react'
import { useState } from 'react';

export const MyContext = React.createContext();

export default function BgColor({children}) {
    const [bgColorGlobal, setBgColorGlobal] = useState(false);
    
  return (
    <MyContext.Provider value={{bgColorGlobal, setBgColorGlobal}}>
        {children}
    </MyContext.Provider>
  )
}
