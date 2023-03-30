import CardBlog from '@/component/CardBlog'
import Container from '@/component/Container'
import SkeletonCard from '@/component/SkeletonCard'
import React, { useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import { MdFilterAltOff } from 'react-icons/md'
const Blogs = () => {

  const [showCloseFilter, setShowCloseFilter] = useState(false)
  const [categorySeleted, setCategorySeleted] = useState(null)
  const handleFilter = (value) => {
    setCategorySeleted(value)
    setShowCloseFilter(true)
  }
  const cleanFilter = () => {
    setShowCloseFilter(false)
    setCategorySeleted(null)
  }
  return (
    <div className=' bg-silver-50'>
      <Container className={'py-20 space-y-10'}>
        <h1 className=' text-heading3 md:text-heading2 font-bold text-dark'>Blogs</h1>
        <div className='flex  items-center gap-x-4 justify-center'>
          <button className={`btn-filter ${categorySeleted === 'tech' && 'text-dark'}`} onClick={() => handleFilter('tech')} > TECH   </button>
          <button className={`btn-filter ${categorySeleted === 'travel' && 'text-dark'}`} onClick={() => handleFilter('travel')} > TRAVEL</button>
          <button className={`btn-filter ${categorySeleted === 'world' && 'text-dark'}`} onClick={() => handleFilter('world')}> WORLD</button>
          <button className={`btn-filter ${categorySeleted === 'news' && 'text-dark'}`} onClick={() => handleFilter('news')}> NEWS</button>
        </div>
        {showCloseFilter && (
          <button
            onClick={cleanFilter}
            className='flex text-heading8 font-semibold items-center  text-dark'>
            Clean filter<MdFilterAltOff size={14} />
          </button>
        )
        }

        <div className='containerCards '>
          {Array(20).fill(0).map((obj, idx) =>
            <CardBlog key={idx} />)}

        </div>
        <button className='font-bold text-primary text-heading7 flex mx-auto  items-center gap-2'>Load more <AiOutlineReload size={20} /></button>

      </Container>
    </div>
  )
}

export default Blogs