import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/ui/Button'
import { Checkbox } from '../components/ui/Checkbox'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-black h-screen`}>
			<Button>Button</Button>
    </div>
  )
}

export default Home
