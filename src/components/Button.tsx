import React, { ReactNode } from 'react'

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  text: string | ReactNode
  onClick?: () => void
  primary?: boolean
  style?: string
}

const Button = ({type, text, onClick, primary, style}:ButtonProps) => {
  /* padding is dynamic
    width
  */
/*  <button className='bg-black text-white py-4 px-[3.4rem] w-full lg:w-fit text-center rounded-full font-medium'> */
  return (
    <button type={type} onClick={onClick} className={`${primary ? `bg-black text-white ${style}`: `border-2 border-black/10 bg-transparent text-black ${style}`} font-satoshi text-center rounded-full font-medium`}>
      {text}
    </button>
  )
}

export default Button