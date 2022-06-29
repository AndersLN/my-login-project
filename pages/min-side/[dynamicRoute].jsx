import { useRouter } from 'next/router'
import React from 'react'



export default function DynamicHei() {
    const router = useRouter()

    const name = router.asPath
    return (
    <h1>Welcome {name}</h1>
  )
}
