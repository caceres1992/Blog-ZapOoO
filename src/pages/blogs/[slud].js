import CardBlog from '@/component/CardBlog'
import CardRelated from '@/component/CardRelated'
import Container from '@/component/Container'
import React from 'react'
import { RiTimeLine } from 'react-icons/ri'
const BlogDetails = () => {
  return (
    <div className='bg-silver-50'>
      <Container className={'py-14 flex  gap-10 flex-col lg:flex-row justify-between items-start '}>
        <div className='space-y-5 flex-1 max-w-[859px]'>
          <div className='space-y-2'>
            <span className='text-heading8  text-dark font-bold flex items-center gap-x-1'> <RiTimeLine /> 10 min read</span>
            <div className='flex  justify-between items-start   md:items-center'>
              <span className='text-gray font-bold  text-heading8'>Lima, October 2020</span>
              <span className='bg-secundary text-primary font-bold text-heading9 md:text-heading8 py-1 px-2 rounded-sm'>TRAVEL</span>
            </div>
          </div>
          <h1 className='text-heading2 font-bold text-dark   max-w-xl'>Paris the most romantic place in France</h1>
          <div className='text-silver-500 text-heading7 leading-[30px] space-y-7'>
            <p>{`Paris is often referred to as the City of Love, and for good reason. It's an enchanting city that has inspired countless love stories, movies, and songs. Paris is a city that embodies romance, from the charming cobblestone streets to the stunning architecture, and the world-famous cuisine.
              There are so many romantic things to do in Paris.
              You can take a stroll through the iconic Montmartre district,
              climb the steps of the Eiffel Tower at sunset,
              or take a boat ride down the Seine River while enjoying a glass of
              champagne. Paris also boasts an abundance of world-renowned museums
              and galleries, such as the Louvre, where you can admire some of
              the most famous pieces of art in the world.`}</p>

            <img className='max-h-[300px] rounded-md w-full object-cover' src="https://s3-alpha-sig.figma.com/img/fa94/ee43/af1c24924711b07e5c34549be436cb5d?Expires=1680480000&Signature=fiq-kwV0XdLgspdVePJYmcMokSZFyXFJmPGoqvF0Di5naR679x43qUvq2TFIFAoMZOLA3FPGwNUDehgA4T4ipWK0yGQ3yca4LYsBd4DimyOCuyaYoPcffFzV-SXm5dXqYEJAQTiy3Y0MrJXgwVtZ7brkOf5D57E6xIb7UbmmVMEqhLVNURHr5rcNDu4p1qyaTUG9wU6DBBP91LYywTtsbPyjEd6~wV3bbqJflmXlU-9bSDsvdIj~K-hV2FIm6zy7Qmqssw-Cf6x2sxbiB7ZS9gLw0mFchYN8pocKzhawXPaPstRfNBe5vjAf8hNZm7~76HxBx3JDvjLzBRSVTNauug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="imagen-paris" />
            <p>
           {`   Paris is a city that caters to couples,
              with plenty of intimate cafes, candlelit restaurants,
              and hidden gardens to explore. Whether you're on a honeymoon,
              celebrating an anniversary, or just looking for a romantic getaway,
              Paris is the perfect destination to ignite that spark.`}
            </p>
            <p>
      {`        While Paris is known for its romantic atmosphere,
              it's also a city with a rich history and culture. You can visit famous landmarks like Notre Dame, the Arc de Triomphe, or the Palace of Versailles. You can also indulge in the city's world-class shopping and fashion scene,
              or simply soak up the ambiance while sipping coffee at a sidewalk café.`}
            </p>

            <p>{`In conclusion, Paris is undeniably one of the most romantic places to visit in the world. Its beauty, charm, and rich cultural heritage make it the perfect destination for couples looking for a romantic getaway. With so much to see and do, Paris is truly a city that should be on everyone's bucket list.`}</p>
          </div>
        </div>

        <div className='w-full lg:max-w-sm space-y-3'>
          <h2 className=' text-heading5  font-medium text-dark'>Post related</h2>
          <CardRelated />
          <CardRelated />
          <CardRelated />
          <CardRelated />
        </div>
      </Container>
    </div >
  )
}

export default BlogDetails