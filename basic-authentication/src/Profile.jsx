/* src/Profile.js */
import { useState, useEffect } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Container from './Container.jsx';

function Profile({signOut, user}) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  

    useEffect(() => {

    async function checkUser() {
      try {
        if (!user) {
          setCurrentUser(null);
          return;
        }
        const attrs = await fetchUserAttributes();
        // attrs contains things like email, phone_number
        // user contains username + other core info
        setCurrentUser({ ...attrs, ...user });
      } catch (err) {
        console.error("error: ", err);
        setCurrentUser(null);
      }
    }

    checkUser();
  }, [user]);

  async function handleSignOut() {
     setCurrentUser(null);

    await signOut();

    navigate("/", { replace: true });
  }

  return (
    <Container>

      {currentUser ? (
        <div className="user-data">
          <h1>Greetings and Salutations, {currentUser.username}!</h1>
          <h2>This is the information we have on file for you:</h2>
          <h3>Email: {currentUser.email}</h3>
          <h4>Phone: {currentUser.phone_number ?? "unknown"}</h4>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Not signed in.</p>
      )}
    </Container>
  );
}


export default withAuthenticator(Profile)