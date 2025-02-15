'use client'
import { useModal } from '@/context/ModalContext';
import React from 'react'

const ModalOverlay = () => {
  const { isOpen, closeModal } = useModal();
  return (
    <>
    {
      isOpen &&
      <div className='absolute top-0 left-0 lg:hidden bg-black/50 w-full h-full z-10' onClick={closeModal}/>
    }
    </>
  )
}

export default ModalOverlay