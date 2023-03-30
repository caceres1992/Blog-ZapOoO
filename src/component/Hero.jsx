import React from 'react'
import Container from './Container'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className=' bg-secundary'>
      <Container className={'  py-14 md:py-20 flex flex-col lg:flex-row gap-6 items-center justify-between'}>
        <div className='flex flex-col  items-center lg:items-start gap-6 text-center lg:text-left'>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}

            transition={{ duration: 1.5 }}
            className='text-heading2 md:text-heading1  font-bold text-dark'>Enjoy ZapOoO Blog </motion.h1>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' text-heading8 md:text-heading6 text-dark max-w-[604px]'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
          </motion.p>
          <motion.div 
          initial={{ width: 0, overflow: 'hidden' }}
          animate={{width:'auto'}}
          transition={{ duration: 1 }}
          >

            <button
              className='bg-primary text-white text-heading7 font-bold  min-w-[300px] py-5 px-8 rounded-md'>
              Read All Our Blogs</button>
          </motion.div>

        </div>
        <motion.img
          initial={{
            opacity: 0,
            x: 100,
            scaleX: -1
          }}
          animate={{ opacity: 1, x: 0, scaleX: -1 }}
          transition={{ duration: 1.5 }}
          className='  md:scale-x-[-1] w-full h-full max-w-md md:max-w-lg ' src='/image/heroimage.png' />
      </Container>
    </div>
  )
}

export default Hero