'use client'

import { signOut } from "next-auth/react"

export default function ButtonLogout(){
  return(
    <button className="bg-red-500 px-3 py-1 border rounded" onClick={()=> signOut()}>Sair</button>
  )
}