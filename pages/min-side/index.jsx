import { useRouter } from 'next/router'
import React, { useRef } from 'react'

export default function UserPage() {
  const router=useRouter()
  return (
    <>
    <div>Logged inn!</div><br />
    <button onClick={()=> router.push("/")} name='goBack'>Go back to main page</button>
    </>
  )
}
