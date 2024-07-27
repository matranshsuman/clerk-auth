import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import './App.css'

function App() {

  return (
    <>
          <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

export default App
