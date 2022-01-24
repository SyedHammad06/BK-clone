import type { NextPage } from 'next'
import { HomePage } from '../components/HomePage'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export default Home
