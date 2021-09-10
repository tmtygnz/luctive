import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NavLink } from '../components/NavLink'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
			<NavLink href="/">test</NavLink>
    </div>
  )
}

export default Home
