/* src/Profile.js */
import { useState, useEffect } from 'react'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Container from './Container.jsx'

function Profile({signOut, user}) {
  
  useEffect(() => {
    checkUser()
  }, [])

  const [currentUser, setCurrentUser] = useState({user})
  async function checkUser() {
    try {
      const userAttributes = await fetchUserAttributes();
      setCurrentUser({...userAttributes, ...user})
    } catch (err) { console.error('error: ', err) }
  }
  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {currentUser.username}</h2>
      <h3>Email: {currentUser.email}</h3>
      <h4>Phone: {currentUser.phone_number ?? 'unknown'}</h4>
      <button onClick={signOut}>Sign Out</button>
    </Container>
  );
}

export default withAuthenticator(Profile)