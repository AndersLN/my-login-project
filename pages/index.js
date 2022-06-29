import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
export default function Home() {


  const router = useRouter()
  const buttonstyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-1"
  return (

    <div className='ml-40 mt-25'>
      <div className='w-40 mt-5'>
        <button onClick={() => router.push("/Login")} className={buttonstyle}>Login</button><br></br>
        <button onClick={() => router.push("/Create")} className={buttonstyle}>Create new user</button>
      </div>

      <div className="mt-20">
        <img onClick={() => router.push("/Login")} src='https://akamai.vgc.no/drfront/images/2022/06/29/w=654;h=437;695065.jpg?format=auto' />
        <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"/>

      </div>
    </div>
  )
}