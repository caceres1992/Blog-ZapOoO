import React, { useState } from 'react'
import Container from './Container'
import { MdEmail } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import { TfiTwitterAlt, TfiFacebook } from 'react-icons/tfi'
import { FaTiktok, FaYoutube } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineLoading3Quarters, AiFillCheckCircle } from 'react-icons/ai'
import { animate, motion } from 'framer-motion'
const Footer = () => {

    const [loading, setLoading] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [email, setEmail] = useState(null)
    const [showAlert, setShowAlert] = useState(false)
    const sendNewsLetters = (e) => {
        e.preventDefault();

        if (email === '' || email === null) {
            setShowAlert(true)
            return
        }

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setShowMessage(true)
        }, 2000);
        // alert('sending...')
    }
    const handleInput = (e) => {
        setEmail(e.target.value)
        if (email !== '' ) {
            setShowAlert(false)
        } else {
            setShowAlert(true)
        }

    }

    return (
        <div className='bg-primary '>
            <Container className='text-center space-y-4 py-12 md:py-20 overflow-hidden'>
                <h3 className='text-heading3 md:text-heading1 font-bold  text-white'>Subscribe to our <br /> <span className='text-dark'>NewsLetter!</span> </h3>
                <p className='text-[#BFCBC2] text-heading8 md:text-heading6 max-w-lg mx-auto'>Change the appearance and position of the popup according to your vision</p>
                {!showMessage ?
                    <motion.form
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        exit={{ x: 100 }}
                        onSubmit={sendNewsLetters}>
                        <div className='flex justify-center items-center w-full mx-auto  h-16 rounded-md overflow-hidden max-w-xl'>
                            <div className='relative rounded-sm flex-1  h-full mx-auto  text-silver-500'>
                                <input type='email' onChange={handleInput} placeholder='Your Email' className='py-5 outline-none px-10 w-full border-none text-heading7' />
                                <MdEmail size={20} className=' absolute top-5 left-2.5 mt-0.5' />
                            </div>
                            <button type={'submit'} disabled={loading} className={`
                        bg-dark text-white px-10 h-full flex items-center gap-x-2 ${loading && 'disabled:bg-silver-700'}`}>
                                <p className=' text-heading7 font-bold hidden  sm:block'>Subscribe Now</p>
                                {!loading && <RiSendPlaneFill size={20} />}
                                {loading && <AiOutlineLoading3Quarters className='  animate-spin' size={20} />}


                            </button>
                        </div>
                        {showAlert && <p className=' text-danger-600 font-semibold uppercase pt-1 text-heading8'>field is requiered</p>}

                    </motion.form>
                    : <motion.div
                        initial={{ x: 200 }}
                        animate={{ x: 0, }}

                        className=' text-white text-heading8 flex items-center space-y-3 justify-center flex-col'>
                        <AiFillCheckCircle size={24} className='mx-auto ' />
                        <p>  Thank you so much for your subscribed</p>

                        <button
                            onClick={() => setShowMessage(false)}
                            className='text-dark font-bold flex items-center '><BiArrowBack size={20} />
                            Back</button>
                    </motion.div>
                }

            </Container>
            <div className='bg-dark py-8'>
                <Container className={'flex justify-between gap-5  flex-col sm:flex-row items-start'}>
                    <p className='text-[#BFCBC2] text-heading7 font-medium text-center sm:text-start'>
                        Copyright @2023 All rights reserved | This template is made by
                        <a href="https://jassondev.com" className=' text-link'> Jasson Caceres</a>

                    </p>
                    <div className=' text-[#BFCBC2] flex  w-full sm:w-fit justify-center  items-center gap-x-3.5'>
                        <TfiFacebook />
                        <TfiTwitterAlt />
                        <FaTiktok />

                        <FaYoutube />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer