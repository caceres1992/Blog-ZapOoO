import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/component/Hero'
import CardBlog from '@/component/CardBlog'
import LatestBlogs from '@/component/LatestBlogs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />

      <LatestBlogs />
  



    </>
  )
}
