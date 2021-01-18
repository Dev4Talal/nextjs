import Head from 'next/head'
import Nav from '../components/nav'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import en from '../locales/en'
import ar from '../locales/ar'
import Home from '../components/home'

export default function Main() {
  return (
    <Home />
  )
}