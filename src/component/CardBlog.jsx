import Link from 'next/link'
import React, { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import SkeletonCard from './SkeletonCard'
const CardBlog = () => {
    const [showBlogs, setShowBlogs] = useState(true)
    if (showBlogs) {
        setTimeout(() => {
            setShowBlogs(false)
        }, 1300);
        return <SkeletonCard />
    } else
        return (
            <div className='text-left flex md:flex-col text-dark bg-white rounded-md overflow-hidden '>
                <img className='w-full h-full max-w-[130px]   sm:flex-1 sm:max-w-full  max-h-48 object-cover' src='https://s3-alpha-sig.figma.com/img/cef0/d191/ddc9662c0ea0e863b984fd2a204e5ad5?Expires=1680480000&Signature=iIZaOdgL5ogNvmHW9VdOfZuCmcDKqmzn4aFF1NFxTPs7Z1F2QiExpDbvLg8lHlCLah4YsSYZy72pFcX7~owCxR-OJb6LDlVKYzAnVHo5oqQI0rEvGoEzWaeJaQ~Riw8RAdLZKKHjtEhnus2CcbgtIJ~MuPGaJdZ-SL-Y0Fi05u9K0dTKw5zoZWUOe5yZm5EBGxc74HIx1AEGSn4zVm6SwonZOkU0BGHgZwFufG94Coa0i4um6wsuZ0gZ7sG7RSrw9raa~4Wbz0lWJHqWuNkVUoH9EAGoxLCActRSR~0pSiopAIjm03CXzUmghJm8Zx71~Ub05iholA6z4UM3No4F1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                <div className=' p-3 md:p-5  space-y-5 sm:flex-1 w-full'>
                    <div className='space-y-2'>
                        <div className='flex  justify-between items-start   md:items-center'>
                            <span className='text-gray font-bold  text-heading8'>Lima,<br /> October 2020</span>
                            <span className='bg-secundary text-primary font-bold text-heading9 md:text-heading8 py-1 px-2 rounded-sm'>TRAVEL</span>
                        </div>
                        <h2 className='font-bold  line-clamp-2 text-heading7 md:text-heading5'>How to build a beautiful input with CSS</h2>
                    </div>

                    <p className='text-heading7 hidden md:block md:line-clamp-3'>St. Croix kicked off 2023 by officially being designated a National Heritage Area, formally.</p>
                    <Link href="/blogs/1" className='
            flex items-center gap-x-2 text-primary font-bold text-heading8 md:text-heading6'>Learn more <BiLinkExternal /></Link>
                </div>
            </div>

        )
}

export default CardBlog