'use client'

import { signOut } from "next-auth/react"

export default function ButtonLogout(){
  return(
    <button className="bg-red-600 px-3 py-2 border rounded" onClick={()=> signOut()}>Log out</button>
  )
}