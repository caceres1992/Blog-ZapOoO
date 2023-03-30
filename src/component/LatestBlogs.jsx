import React from 'react'
import CardBlog from './CardBlog'
import Container from './Container'
import { ImArrowRight2 } from 'react-icons/im'
const LatestBlogs = () => {
    return (
        <div className='bg-silver-50'>
            <Container className={' text-center md:text-left py-10 space-y-10'}>



                <div>
                    <h2 className='text-dark  text-heading5 md:text-heading3 font-medium'>Latest Blogs Posted</h2>
                    <p className=' text-silver-400 text-heading9 md:text-heading6 '>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className='containerCards'>
                    {Array(8).fill(0).map((_, idx) =>
                        <CardBlog key={idx} />

                    )}

                </div>
                <button className='font-bold text-primary text-heading7 flex  items-center gap-2'>View All The Blogs <ImArrowRight2 size={20} /></button>

            </Container>
        </div>
    )
}

export default LatestBlogs