import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className='bg-scroll bg-my_bg_image h-screen w-screen bg-cover'>
      <NavBar />
      
    </div>
  )
  
}
