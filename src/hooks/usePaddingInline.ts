import { useState, useEffect, MutableRefObject } from 'react';

const usePaddingInline = (wrapperRef: MutableRefObject<HTMLDivElement | null>) => {
  const [widthDifference, setWidthDifference] = useState(0);

  const updatePaddingInline = () => {
    const wrapperWidth = wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : 0;
    const windowWidth = window.innerWidth;
    const extraWidth = 18 //customize this to remove extra unknown spacing

    if (windowWidth > 1240) {
      /* this line of code set the number for Inline Padding */
      setWidthDifference(((windowWidth - wrapperWidth)-extraWidth) / 2);
    } else {
      setWidthDifference(0);
    }
    console.log(`wrapperWidth: ${wrapperWidth}, windowWidth: ${windowWidth}, widthDifference: ${widthDifference}`);
  };

  useEffect(() => {
    updatePaddingInline();
    window.addEventListener('resize', updatePaddingInline);

    return () => {
      window.removeEventListener('resize', updatePaddingInline);
    };
  }, [wrapperRef]);

  return widthDifference;
};

export default usePaddingInline;
