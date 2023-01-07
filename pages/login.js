import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <p> Signed in as {session.user.email} </p>
        <img src={session.user.image} 
        style={{'borderRadius': '100px'
        }}/>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
     <p> Not signed in</p>  
     <br />
    <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
