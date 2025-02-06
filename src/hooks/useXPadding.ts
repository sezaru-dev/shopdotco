
import React, {useEffect, useState } from 'react'


const useXPadding = (width:number) => {
  const [padding, setPadding] = useState(typeof window !== 'undefined' ? (window.innerWidth - width) / 2 : 0)
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (typeof window !== 'undefined') {
      let screenWidth = window.innerWidth
      /* padding = window-width - wrapperContainerWidth / 2 */
      let outerPadding = (screenWidth - width) / 2

      /* if screensize is equal or less than the wrapper width, it means smaller screen(wrapper takes w-full)*/
      if (screenWidth <= width ) {
        setPadding(0)
      }else if (screenWidth > width) {
        /* if screensize is greater than the wrapper width, it means the screen width exceeds wrapper container width and this will provide accurate left/right spacing*/
        setPadding(outerPadding)
      }
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
  
  
  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize)
    }
  }
  }, [padding])
  
  return isClient ? {isMounted: isClient, padding} : {isMounted: isClient, padding:0}
  
}

export default useXPadding