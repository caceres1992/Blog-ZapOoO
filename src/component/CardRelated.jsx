

import Link from 'next/link'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

const CardRelated = () => {
  return (
    <div className='text-left flex   text-dark bg-white rounded-md overflow-hidden '>
    <img className='w-full max-w-[130px] sm:max-h-36 lg:max-h-none sm:max-w-none lg:max-w-[130px] object-cover' src='https://s3-alpha-sig.figma.com/img/cef0/d191/ddc9662c0ea0e863b984fd2a204e5ad5?Expires=1680480000&Signature=iIZaOdgL5ogNvmHW9VdOfZuCmcDKqmzn4aFF1NFxTPs7Z1F2QiExpDbvLg8lHlCLah4YsSYZy72pFcX7~owCxR-OJb6LDlVKYzAnVHo5oqQI0rEvGoEzWaeJaQ~Riw8RAdLZKKHjtEhnus2CcbgtIJ~MuPGaJdZ-SL-Y0Fi05u9K0dTKw5zoZWUOe5yZm5EBGxc74HIx1AEGSn4zVm6SwonZOkU0BGHgZwFufG94Coa0i4um6wsuZ0gZ7sG7RSrw9raa~4Wbz0lWJHqWuNkVUoH9EAGoxLCActRSR~0pSiopAIjm03CXzUmghJm8Zx71~Ub05iholA6z4UM3No4F1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
    <div className=' p-3   space-y-2  w-full'>
        <div className='space-y-0.5'>
            <div className='flex  justify-between items-start   '>
                <span className='text-gray font-bold  text-heading9'>Lima,<br /> October 2020</span>
                <span className='bg-secundary text-primary font-bold text-heading9  py-1 px-2 rounded-sm'>TRAVEL</span>
            </div>
            <h2 className='font-bold text-heading7 line-clamp-2'>How to build a beautiful input with CSS</h2>
        </div>

        <Link href="/blogs/1" className='
    flex items-center gap-x-2 text-primary font-bold text-heading8 '>Learn more <BiLinkExternal /></Link>
    </div>
</div>
  )
}

export default CardRelated